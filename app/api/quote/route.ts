import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()

    const {
      factoryName,
      contactName,
      phone,
      email,
      currentBoilerType,
      capacity,
      application,
      message,
    } = data

    if (!factoryName || !contactName || !phone) {
      return NextResponse.json({ error: 'Required fields missing.' }, { status: 400 })
    }

    const emailBody = `
New Quote Request — Hengxin Boiler Bangladesh
=============================================

Factory Name:    ${factoryName}
Contact Name:    ${contactName}
Phone/WhatsApp:  ${phone}
Email:           ${email || 'Not provided'}

Current Fuel:    ${currentBoilerType || 'Not specified'}
Capacity Needed: ${capacity || 'Not specified'}
Application:     ${application || 'Not specified'}

Message:
${message || 'No additional message.'}

---------------------------------------------
Submitted via: hengxin-boiler-bangladesh.vercel.app
    `.trim()

    // Attempt to send email via SMTP if configured
    const emailHost = process.env.EMAIL_HOST
    const emailUser = process.env.EMAIL_USER
    const emailPass = process.env.EMAIL_PASS
    const emailTo = process.env.EMAIL_TO || 'hasibulmunim@gmail.com'
    const emailPort = parseInt(process.env.EMAIL_PORT || '587', 10)

    if (emailHost && emailUser && emailPass) {
      const nodemailer = await import('nodemailer')
      const transporter = nodemailer.default.createTransport({
        host: emailHost,
        port: emailPort,
        secure: emailPort === 465,
        auth: { user: emailUser, pass: emailPass },
      })

      await transporter.sendMail({
        from: `"Hengxin Boiler BD" <${emailUser}>`,
        to: emailTo,
        replyTo: email || undefined,
        subject: `New Quote Request — ${factoryName} (${capacity || 'capacity TBD'})`,
        text: emailBody,
        html: emailBody.replace(/\n/g, '<br>').replace(/={3,}/g, '<hr>').replace(/^(.+):(.+)/gm, '<strong>$1:</strong>$2'),
      })
    } else {
      // Log to console when email not configured (for development / debug)
      console.log('[Quote Request Received]\n', emailBody)
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Quote form error:', err)
    return NextResponse.json({ error: 'Failed to process request.' }, { status: 500 })
  }
}
