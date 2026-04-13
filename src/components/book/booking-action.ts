"use server";

import { siteConfig } from "@/lib/content";
import { createLeadNote } from "@/lib/create-lead-note";

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

  // Validate required fields
  if (!name?.trim() || !email?.trim() || !business?.trim() || !businessType?.trim()) {
    return { success: false, error: "Please fill in all required fields." };
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
      : interestLabel.includes("Audit") || interestLabel.includes("Implementation")
        ? "AI Audit"
        : "AI Session";

  try {
    // Dynamic import to avoid issues if RESEND_API_KEY isn't set during build
    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);

    const sessionLabel =
      subjectTag === "AI Training"
        ? "AI training session"
        : subjectTag === "AI Audit"
          ? "AI Audit"
          : "AI session";

    // Send internal notification email
    await resend.emails.send({
      from: "Quilliam AI <bookings@quilliam.ai>",
      to: [siteConfig.email],
      replyTo: email.trim(),
      subject: `New ${subjectTag} Booking: ${name.trim()} — ${business.trim()}`,
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
        <p>Hi ${escapeHtml(name.trim().split(" ")[0])},</p>
        <p>Thanks for booking a ${escapeHtml(sessionLabel)}. I'll get back to you within 24 hours to arrange a time.</p>
        <p>In the meantime, if you have any questions, just reply to this email or <a href="https://wa.me/${siteConfig.whatsapp}">message me on WhatsApp</a>.</p>
        <p>Speak soon,<br>Levi Quilliam<br>Quilliam AI</p>
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

    return { success: true };
  } catch (error) {
    console.error("Booking submission error:", error);
    return {
      success: false,
      error: "Failed to send your booking. Please try WhatsApp instead.",
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
