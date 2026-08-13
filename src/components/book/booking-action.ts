"use server";

import { siteConfig } from "@/lib/content";
import { createLeadNote } from "@/lib/create-lead-note";
import { captureServerBookingSuccess } from "@/lib/posthog-server";

interface BookingResult {
  success: boolean;
  error?: string;
}

export async function submitBooking(formData: FormData): Promise<BookingResult> {
  const name = formData.get("name") as string | null;
  const email = formData.get("email") as string | null;
  const phone = formData.get("phone") as string | null;
  const business = formData.get("business") as string | null;
  const businessType = formData.get("businessType") as string | null;
  const message = formData.get("message") as string | null;
  const interest = formData.get("interest") as string | null;
  const analyticsConsent = formData.get("analyticsConsent") as string | null;
  const pageUrl = formData.get("pageUrl") as string | null;

  // Validate required fields
  if (!name?.trim() || !email?.trim() || !business?.trim() || !businessType?.trim()) {
    return { success: false, error: "Please complete all required fields." };
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    return { success: false, error: "Please enter a valid email address." };
  }

  const interestLabel = interest?.trim() || "Not specified";
  const subjectTag =
    interestLabel.includes("Training") || interestLabel.includes("Education")
      ? "AI Training"
      : interestLabel.includes("Opportunity") || interestLabel.includes("Implementation")
        ? "AI Opportunity"
        : "AI Session";

  try {
    // Dynamic import to avoid issues if RESEND_API_KEY isn't set during build
    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);

    const sessionLabel =
      subjectTag === "AI Training"
        ? "AI training session"
        : subjectTag === "AI Opportunity"
          ? "AI opportunity session"
          : "AI session";

    // Send internal notification email
    await resend.emails.send({
      from: "Quilliam AI <bookings@quilliam.ai>",
      to: [siteConfig.email],
      replyTo: email.trim(),
      subject: `New ${subjectTag} booking: ${name.trim()} | ${business.trim()}`,
      html: `
        <h2>New ${escapeHtml(subjectTag)} Booking</h2>
        <table style="border-collapse:collapse;width:100%;max-width:500px">
          <tr>
            <td style="padding:8px 12px;font-weight:600;color:#666;border-bottom:1px solid #eee">Interest</td>
            <td style="padding:8px 12px;border-bottom:1px solid #eee">${escapeHtml(interestLabel)}</td>
          </tr>
          <tr>
            <td style="padding:8px 12px;font-weight:600;color:#666;border-bottom:1px solid #eee">Name</td>
            <td style="padding:8px 12px;border-bottom:1px solid #eee">${escapeHtml(name.trim())}</td>
          </tr>
          <tr>
            <td style="padding:8px 12px;font-weight:600;color:#666;border-bottom:1px solid #eee">Email</td>
            <td style="padding:8px 12px;border-bottom:1px solid #eee"><a href="mailto:${escapeHtml(email.trim())}">${escapeHtml(email.trim())}</a></td>
          </tr>
          ${phone?.trim() ? `<tr>
            <td style="padding:8px 12px;font-weight:600;color:#666;border-bottom:1px solid #eee">Phone</td>
            <td style="padding:8px 12px;border-bottom:1px solid #eee">${escapeHtml(phone.trim())}</td>
          </tr>` : ""}
          <tr>
            <td style="padding:8px 12px;font-weight:600;color:#666;border-bottom:1px solid #eee">Business</td>
            <td style="padding:8px 12px;border-bottom:1px solid #eee">${escapeHtml(business.trim())}</td>
          </tr>
          <tr>
            <td style="padding:8px 12px;font-weight:600;color:#666;border-bottom:1px solid #eee">Business type</td>
            <td style="padding:8px 12px;border-bottom:1px solid #eee">${escapeHtml(businessType.trim())}</td>
          </tr>
          ${message?.trim() ? `<tr>
            <td style="padding:8px 12px;font-weight:600;color:#666;border-bottom:1px solid #eee">What they need</td>
            <td style="padding:8px 12px;border-bottom:1px solid #eee">${escapeHtml(message.trim())}</td>
          </tr>` : ""}
        </table>
      `,
    });

    // Send confirmation email to the lead
    resend.emails.send({
      from: "Levi at Quilliam AI <levi@quilliam.ai>",
      to: [email.trim()],
      replyTo: siteConfig.email,
      subject: `Your ${sessionLabel} with Quilliam AI is booked`,
      html: `
        <p>Dear ${escapeHtml(name.trim().split(" ")[0])},</p>
        <p>Thank you for requesting a ${escapeHtml(sessionLabel)}. I will contact you within 24 hours to arrange a time.</p>
        <p>If you have any questions, please reply to this email or <a href="https://wa.me/${siteConfig.whatsapp}">contact me on WhatsApp</a>.</p>
        <p>Kind regards,<br>Levi Quilliam<br>Quilliam AI</p>
      `,
    }).catch((err) => console.error("Confirmation email failed:", err));

    // Create lead note in Obsidian vault (fire-and-forget, never blocks)
    createLeadNote({
      name: name.trim(),
      email: email.trim(),
      phone: phone?.trim(),
      business: business.trim(),
      businessType: businessType.trim(),
      interest: interestLabel,
      message: message?.trim(),
    }).catch(() => {});

    await captureServerBookingSuccess({
      analyticsConsent:
        analyticsConsent === "accepted" || analyticsConsent === "rejected"
          ? analyticsConsent
          : "unknown",
      business: business.trim(),
      businessType: businessType.trim(),
      email: email.trim(),
      interest: interestLabel,
      message: message?.trim(),
      name: name.trim(),
      pageUrl: pageUrl?.trim(),
      phone: phone?.trim(),
    });

    return { success: true };
  } catch (error) {
    console.error("Booking submission error:", error);
    return {
      success: false,
      error: "We could not send your request. Please try again or contact us by WhatsApp.",
    };
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
