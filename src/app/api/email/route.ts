import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
    try {
        const { name, email, date, time, notes } = await request.json()

        if (!process.env.EMAIL_PASS || !process.env.EMAIL_USER) {
            console.log('❌ ERROR: Credentials missing in .env.local')
            return NextResponse.json({
                error: 'Server config error',
                details: 'EMAIL_PASS or EMAIL_USER environment variable is not set.'
            }, { status: 500 })
        }

        console.log('📧 Debug: Sending email as:', process.env.EMAIL_USER)
        console.log('🔑 Debug: Password length:', process.env.EMAIL_PASS.length)

        if (process.env.EMAIL_USER?.includes('gamil.com')) {
            console.log('❌ CRITICAL ERROR: typo detected "gamil.com". Please fix to "gmail.com"')
        }

        // Create a transporter using explicit SMTP settings
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        })

        const mailOptions = {
            from: `"${email}" <${process.env.EMAIL_USER}>`, // Shows user's email as the sender name
            replyTo: email, // Hitting 'Reply' will send to the user
            to: 'sutharharshp08@gmail.com, parvashukla26@gmail.com',
            subject: `New Meeting Request: ${name}`,
            text: `
        Name: ${name}
        Email: ${email}
        Date: ${date}
        Time: ${time}
        Notes: ${notes}
      `,
            html: `
        <div style="font-family: sans-serif; color: #333;">
          <h2>New Meeting Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Date:</strong> ${date}</p>
          <p><strong>Time:</strong> ${time}</p>
          <p><strong>Notes:</strong> ${notes}</p>
        </div>
      `,
        }

        await transporter.sendMail(mailOptions)

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        console.error('SERVER SIDE EMAIL ERROR:', error)
        return NextResponse.json({ error: 'Failed to send email. Check server logs for details.', details: error.message }, { status: 500 })
    }
}
