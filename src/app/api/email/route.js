// app/api/email/route.js
import { EmailTemplate } from '@/component/EmailTemplate/email-template';
import { NextResponse } from 'next/server'; 
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { email } = body;

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'A valid email is required' }, { status: 400 });
    }

    // Email to the user
    const userEmail = {
      from: process.env.SENDER_EMAIL,
      to: email,
      subject: 'Thanks for contacting us!',
      react: EmailTemplate({ email }),
    };

    // Email to the provider
    const providerEmail = {
      from: process.env.SENDER_EMAIL,
      to: process.env.RECIVER_EMAIL,
      subject: `New submission from ${email}`,
      html: `<p>A user with the email <strong>${email}</strong> submitted the form.</p>`,
    };

    const [userResult, providerResult] = await Promise.all([
      resend.emails.send(userEmail),
      resend.emails.send(providerEmail),
    ]);

    if (userResult.error || providerResult.error) {
      console.error('Email sending error:', userResult.error || providerResult.error);
      return NextResponse.json({ error: 'Failed to send one or both emails' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Emails sent successfully' }, { status: 200 });

  } catch (err) {
    console.error('Internal server error:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
