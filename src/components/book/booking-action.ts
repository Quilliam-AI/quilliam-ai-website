"use server";

import { siteConfig } from "@/lib/content";

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

  // Validate required fields
  if (!name?.trim() || !email?.trim() || !business?.trim() || !businessType?.trim()) {
    return { success: false, error: "Please fill in all required fields." };
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    return { success: false, error: "Please enter a valid email address." };
  }

  try {
    // Dynamic import to avoid issues if RESEND_API_KEY isn't set during build
    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "Quilliam Digital <bookings@quilliamdigital.com>",
      to: [siteConfig.email],
      replyTo: email.trim(),
      subject: `New AI Audit Booking: ${name.trim()} — ${business.trim()}`,
      html: `
        <h2>New AI Audit Booking</h2>
        <table style="border-collapse:collapse;width:100%;max-width:500px">
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
            <td style="padding:8px 12px;font-weight:600;color:#666;border-bottom:1px solid #eee">Industry</td>
            <td style="padding:8px 12px;border-bottom:1px solid #eee">${escapeHtml(businessType.trim())}</td>
          </tr>
          ${message?.trim() ? `<tr>
            <td style="padding:8px 12px;font-weight:600;color:#666;border-bottom:1px solid #eee">Biggest time-waster</td>
            <td style="padding:8px 12px;border-bottom:1px solid #eee">${escapeHtml(message.trim())}</td>
          </tr>` : ""}
        </table>
      `,
    });

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
