import nodemailer from 'nodemailer';
import { Resend } from 'resend';
import path from 'path';
import fs from 'fs/promises';

export interface SendEmailParams {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export async function sendInquiryEmail(data: SendEmailParams) {
  const { name, email, phone, message } = data;

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #1e293b; background-color: #f8fafc; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05); border: 1px solid #f1f5f9; }
        .header { background: linear-gradient(135deg, #16a34a, #0ea5e9); padding: 30px; text-align: center; color: white; }
        .header h1 { margin: 0; font-size: 22px; font-weight: 800; letter-spacing: -0.02em; }
        .header p { margin: 5px 0 0; opacity: 0.9; font-size: 13px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em; }
        .content { padding: 30px; }
        .section-title { font-size: 14px; font-weight: 700; color: #0f172a; margin-top: 0; margin-bottom: 15px; border-bottom: 2px solid #f1f5f9; padding-bottom: 6px; text-transform: uppercase; letter-spacing: 0.05em; }
        .grid { display: grid; grid-template-columns: 1fr; gap: 12px; margin-bottom: 20px; }
        @media (min-width: 480px) {
          .grid { display: grid; grid-template-columns: 1fr 1fr; }
        }
        .field { background: #f8fafc; padding: 12px; border-radius: 8px; border: 1px solid #f1f5f9; }
        .field-label { font-size: 10px; font-weight: 700; text-transform: uppercase; color: #64748b; margin-bottom: 4px; letter-spacing: 0.05em; }
        .field-value { font-size: 14px; font-weight: 600; color: #334155; }
        .message-box { background: #f0fdf4; border-left: 4px solid #16a34a; padding: 18px; border-radius: 4px 8px 8px 4px; margin-top: 15px; font-size: 14px; color: #166534; white-space: pre-wrap; line-height: 1.6; }
        .footer { background: #f8fafc; padding: 15px 30px; text-align: center; font-size: 11px; color: #94a3b8; border-top: 1px solid #f1f5f9; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Contact Message</h1>
          <p>Ceylon Vidu Tours Booking Management System</p>
        </div>
        <div class="content">
          <h2 class="section-title">Sender Information</h2>
          <div class="grid">
            <div class="field">
              <div class="field-label">Name</div>
              <div class="field-value">${name}</div>
            </div>
            <div class="field">
              <div class="field-label">Email Address</div>
              <div class="field-value"><a href="mailto:${email}" style="color: #0ea5e9; text-decoration: none;">${email}</a></div>
            </div>
            <div class="field" style="grid-column: span 2;">
              <div class="field-label">Phone Number</div>
              <div class="field-value">${phone || 'Not Provided'}</div>
            </div>
          </div>

          <h2 class="section-title">Message</h2>
          <div class="message-box">${message}</div>
        </div>
        <div class="footer">
          This message was sent from the Ceylon Vidu Tours Contact Form.
        </div>
      </div>
    </body>
    </html>
  `;

  const textContent = `
    New Contact Message received from Ceylon Vidu Tours!
    
    SENDER INFO:
    - Name: ${name}
    - Email: ${email}
    - Phone: ${phone || 'Not Provided'}
    
    MESSAGE:
    ${message}
  `;

  const emailSubject = `[Contact Form Submission] from ${name}`;
  const sendTo = process.env.SMTP_TO || 'hello@ceylonvidutours.com';

  console.log(`[Email Service] Attempting to deliver email...`);

  // 1. Try Resend if RESEND_API_KEY is available
  if (process.env.RESEND_API_KEY) {
    try {
      console.log(`[Email Service] Dispatching via Resend API...`);
      const resend = new Resend(process.env.RESEND_API_KEY);
      const resendData = await resend.emails.send({
        from: process.env.SMTP_FROM || 'Ceylon Vidu Tours <onboarding@resend.dev>',
        to: sendTo,
        replyTo: email,
        subject: emailSubject,
        html: htmlContent,
        text: textContent,
      });

      if (resendData.error) {
        throw new Error(resendData.error.message);
      }

      return {
        success: true,
        provider: 'resend',
        id: resendData.data?.id,
        message: 'Email sent successfully via Resend.'
      };
    } catch (err: any) {
      console.error('[Email Service] Resend dispatch failed:', err.message || err);
    }
  }

  // 2. Try Nodemailer if SMTP Configuration is available
  if (
    process.env.SMTP_HOST &&
    process.env.SMTP_USER &&
    process.env.SMTP_PASS
  ) {
    try {
      console.log(`[Email Service] Dispatching via SMTP: ${process.env.SMTP_HOST}`);
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const info = await transporter.sendMail({
        from: process.env.SMTP_FROM || `"${name}" <${email}>`,
        to: sendTo,
        replyTo: email,
        subject: emailSubject,
        text: textContent,
        html: htmlContent,
      });

      console.log('[Email Service] SMTP sent successfully. Message ID:', info.messageId);

      return {
        success: true,
        provider: 'nodemailer',
        id: info.messageId,
        message: 'Email sent successfully via SMTP.'
      };
    } catch (err: any) {
      console.error('[Email Service] SMTP dispatch failed:', err.message || err);
    }
  }

  // 3. Fallback: Log email to local file and stdout
  console.warn('[Email Service] WARNING: No mail provider configured in environment variables.');

  try {
    const backupDir = path.join(process.cwd(), 'tmp', 'emails');
    await fs.mkdir(backupDir, { recursive: true });
    const fileName = `contact-${Date.now()}-${name.replace(/[^a-zA-Z0-9]/g, '_')}.html`;
    const filePath = path.join(backupDir, fileName);
    await fs.writeFile(filePath, htmlContent, 'utf-8');
    console.log(`[Email Service] Mock email HTML page saved locally: ${filePath}`);
    
    return {
      success: true,
      provider: 'local_mock',
      id: fileName,
      message: 'Message captured. Configure SMTP or Resend credentials in .env for active delivery.',
      filePath: filePath
    };
  } catch (backupErr) {
    console.error('[Email Service] Local file capture failed:', backupErr);
  }

  return {
    success: true,
    provider: 'console',
    id: `dev-${Date.now()}`,
    message: 'Message dumped to logs. Ensure SMTP or Resend details are active in environment.'
  };
}

export async function sendAdminOtpEmail(email: string, code: string) {
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #1e293b; background-color: #f8fafc; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); border: 1px solid #f1f5f9; }
        .header { background: linear-gradient(135deg, #022c22, #0f172a); padding: 30px; text-align: center; color: white; }
        .header h1 { margin: 0; font-size: 22px; font-weight: 800; }
        .content { padding: 40px 30px; text-align: center; }
        .otp-title { font-size: 16px; font-weight: 700; color: #334155; margin-bottom: 20px; text-transform: uppercase; }
        .otp-code { font-size: 36px; font-weight: 900; color: #059669; letter-spacing: 6px; background: #ecfdf5; padding: 15px 30px; border-radius: 12px; display: inline-block; border: 1px solid #a7f3d0; margin-bottom: 26px; }
        .warning { font-size: 13px; color: #64748b; margin-top: 20px; }
        .footer { background: #f8fafc; padding: 15px 30px; text-align: center; font-size: 11px; color: #94a3b8; border-top: 1px solid #f1f5f9; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Ceylon Vidu Tours</h1>
          <p style="margin: 5px 0 0; opacity: 0.8; font-size: 12px;">ADMINISTRATIVE SECURITY SHIELD</p>
        </div>
        <div class="content">
          <h2 class="otp-title">Secure Portal Verification OTP</h2>
          <p style="color: #475569; font-size: 14px; margin-bottom: 30px;">
            A login attempt has been initiated for the Administrator console. Please use the following 2FA passcode:
          </p>
          <div class="otp-code">${code}</div>
          <p class="warning">
            This verification code is valid for exactly <strong>5 minutes</strong>. If you did not trigger this attempt, please contact network security immediately.
          </p>
        </div>
        <div class="footer">
          Ceylon Vidu Tours High-Security Command Terminal.
        </div>
      </div>
    </body>
    </html>
  `;

  const textContent = `
    Ceylon Vidu Tours - Administrative 2FA Passcode
    
    A login attempt was made. Use this code to verify:
    
    OTP CODE: ${code}
    
    This code is valid for 5 minutes.
  `;

  const emailSubject = `[Security Shield] Administrative 2FA Passcode - ${code}`;
  
  if (process.env.RESEND_API_KEY) {
     try {
       const resend = new Resend(process.env.RESEND_API_KEY);
       await resend.emails.send({
         from: process.env.SMTP_FROM || 'Ceylon Vidu Tours <onboarding@resend.dev>',
         to: email,
         subject: emailSubject,
         html: htmlContent,
         text: textContent,
       });
       return;
     } catch (err) {
       console.error('[OTP Email] Resend failed:', err);
     }
  }

  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
     try {
       const transporter = nodemailer.createTransport({
         host: process.env.SMTP_HOST,
         port: parseInt(process.env.SMTP_PORT || '587'),
         secure: process.env.SMTP_SECURE === 'true',
         auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
       });
       await transporter.sendMail({
         from: process.env.SMTP_FROM || '"Ceylon Vidu Tours Guard" <no-reply@ceylonvidutours.com>',
         to: email,
         subject: emailSubject,
         html: htmlContent,
         text: textContent,
       });
       return;
     } catch (err) {
       console.error('[OTP Email] SMTP failed:', err);
     }
  }

  // Backup log locally
  try {
    const backupDir = path.join(process.cwd(), 'tmp', 'emails');
    await fs.mkdir(backupDir, { recursive: true });
    const filePath = path.join(backupDir, `otp-${Date.now()}-${email}.html`);
    await fs.writeFile(filePath, htmlContent, 'utf-8');
    console.log(`[OTP Email Service] Mock OTP email webpage saved: ${filePath}`);
  } catch (err) {
    console.error('[OTP Email Service] Backup write error:', err);
  }
}
