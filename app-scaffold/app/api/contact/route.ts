import { NextResponse } from "next/server";
import { Resend } from "resend";

// Fallback to empty string to avoid crashes during build if env var is missing
const resend = new Resend(process.env.RESEND_API_KEY || "re_dummy");

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message, type } = body;

    // Type is to identify if it's from the contact page or a general inquiry
    const inquiryType = type || "General Inquiry";

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
      // If no API key, just log and return success (for local dev without key)
      console.log("Mock email sent:", { name, email, subject, message, inquiryType });
      return NextResponse.json({ success: true, mock: true });
    }

    const data = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>", // Default resend testing domain
      to: ["hallo.khanif@gmail.com"], // Your email
      subject: `[URGENT] New Message from Portfolio: ${subject || inquiryType}`,
      replyTo: email,
      headers: {
        'X-Priority': '1',
        'X-MSMail-Priority': 'High',
        'Importance': 'high',
      },
      html: `
        <h2>New Message from ${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Type:</strong> ${inquiryType}</p>
        <p><strong>Subject:</strong> ${subject || "-"}</p>
        <hr />
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    if (data.error) {
      return NextResponse.json({ error: data.error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
