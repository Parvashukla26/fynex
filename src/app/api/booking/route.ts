import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { name, email, notes, date, time } = await req.json();

    // Validate required fields
    if (!name || !email || !date || !time) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email to you (the business owner)
    const { data, error } = await resend.emails.send({
      from: 'Fynex Booking <onboarding@resend.dev>', // Use your verified domain later
      to: ['fynexxstudio@gmail.com'], // Your verified Resend email
      subject: `🎯 New Booking Request from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #0a0a0a;">
            <div style="max-width: 600px; margin: 40px auto; background: linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%); border-radius: 16px; overflow: hidden; border: 1px solid rgba(197, 160, 89, 0.1);">
              
              <!-- Header -->
              <div style="background: linear-gradient(135deg, #c5a059 0%, #a48446 100%); padding: 32px; text-align: center;">
                <h1 style="margin: 0; color: #000; font-size: 24px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase;">New Booking Request</h1>
              </div>

              <!-- Content -->
              <div style="padding: 40px 32px;">
                
                <!-- Schedule Info -->
                <div style="background: rgba(197, 160, 89, 0.05); border: 1px solid rgba(197, 160, 89, 0.2); border-radius: 12px; padding: 24px; margin-bottom: 32px;">
                  <div style="text-align: center;">
                    <p style="margin: 0 0 8px 0; color: rgba(255, 255, 255, 0.4); font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em;">Scheduled For</p>
                    <h2 style="margin: 0; color: #c5a059; font-size: 28px; font-weight: 600;">${date}</h2>
                    <p style="margin: 8px 0 0 0; color: #fff; font-size: 20px; font-weight: 500;">${time}</p>
                  </div>
                </div>

                <!-- Client Details -->
                <div style="margin-bottom: 24px;">
                  <h3 style="margin: 0 0 16px 0; color: rgba(255, 255, 255, 0.6); font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; font-weight: 700;">Client Information</h3>
                  
                  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 8px; padding: 16px; margin-bottom: 12px;">
                    <p style="margin: 0 0 4px 0; color: rgba(255, 255, 255, 0.4); font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em;">Name</p>
                    <p style="margin: 0; color: #fff; font-size: 16px; font-weight: 500;">${name}</p>
                  </div>

                  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 8px; padding: 16px;">
                    <p style="margin: 0 0 4px 0; color: rgba(255, 255, 255, 0.4); font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em;">Email</p>
                    <p style="margin: 0; color: #c5a059; font-size: 16px; font-weight: 500;">
                      <a href="mailto:${email}" style="color: #c5a059; text-decoration: none;">${email}</a>
                    </p>
                  </div>
                </div>

                <!-- Notes -->
                ${notes ? `
                <div style="margin-bottom: 24px;">
                  <h3 style="margin: 0 0 12px 0; color: rgba(255, 255, 255, 0.6); font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; font-weight: 700;">Agenda / Notes</h3>
                  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 8px; padding: 16px;">
                    <p style="margin: 0; color: rgba(255, 255, 255, 0.7); font-size: 15px; line-height: 1.6;">${notes}</p>
                  </div>
                </div>
                ` : ''}

                <!-- CTA Button -->
                <div style="text-align: center; margin-top: 32px;">
                  <a href="mailto:${email}?subject=Re: Consultation Booking - ${date} at ${time}" 
                     style="display: inline-block; background: linear-gradient(135deg, #c5a059 0%, #a48446 100%); color: #000; padding: 14px 32px; border-radius: 50px; text-decoration: none; font-weight: 700; font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em; transition: transform 0.2s;">
                    Reply to Client
                  </a>
                </div>

              </div>

              <!-- Footer -->
              <div style="background: rgba(255, 255, 255, 0.02); padding: 24px 32px; text-align: center; border-top: 1px solid rgba(255, 255, 255, 0.05);">
                <p style="margin: 0; color: rgba(255, 255, 255, 0.3); font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em;">Fynex Studio Booking System</p>
                <p style="margin: 8px 0 0 0; color: rgba(255, 255, 255, 0.2); font-size: 10px;">This is an automated notification</p>
              </div>

            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
