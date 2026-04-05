import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Format date
    const [y, m, d] = data.date.split('-').map(Number);
    const dateObj = new Date(y, m - 1, d);
    const dateFormatted = dateObj.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

    const messageBlock = data.message ? `\nMESSAGE :\n${data.message}` : '';

    // 1. Email Admin
    const adminMailOptions = {
      from: `"${data.name}" <${process.env.SMTP_USER}>`,
      replyTo: data.email,
      to: process.env.EMAIL_RECEIVER || process.env.SMTP_USER,
      subject: `📞 Appel découverte : ${data.name} — ${dateFormatted} à ${data.time}`,
      text: `
Nouvelle demande d'appel découverte reçue sur Quido Conciergerie.

CRÉNEAU RÉSERVÉ :
- Date : ${dateFormatted}
- Heure : ${data.time}
- Durée : 30 minutes

CONTACT :
- Nom : ${data.name}
- Email : ${data.email}
- Téléphone : ${data.phone}
${messageBlock}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #111;">
          <h2 style="color: #00cdb4;">📞 Nouvel appel découverte</h2>
          <p>Un prospect a réservé un créneau sur Quido Conciergerie.</p>
          
          <div style="background: #f8f8f8; border-radius: 10px; padding: 20px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #111;">📅 Créneau réservé</h3>
            <p style="font-size: 18px; font-weight: bold; margin: 5px 0;">${dateFormatted}</p>
            <p style="font-size: 18px; color: #00cdb4; font-weight: bold; margin: 5px 0;">${data.time} — 30 min</p>
          </div>

          <h3 style="border-bottom: 1px solid #E8E8E8; padding-bottom: 5px;">Coordonnées</h3>
          <ul style="list-style: none; padding: 0;">
            <li style="margin-bottom: 10px;"><strong>Nom:</strong> ${data.name}</li>
            <li style="margin-bottom: 10px;"><strong>Email:</strong> <a href="mailto:${data.email}" style="color:#00cdb4">${data.email}</a></li>
            <li style="margin-bottom: 10px;"><strong>Téléphone:</strong> <a href="tel:${data.phone}" style="color:#00cdb4">${data.phone}</a></li>
          </ul>

          ${data.message ? `
          <h3 style="border-bottom: 1px solid #E8E8E8; padding-bottom: 5px;">Message</h3>
          <p style="background: #f8f8f8; padding: 15px; border-radius: 8px;">${data.message}</p>
          ` : ''}
        </div>
      `
    };

    // 2. Email Confirmation Client
    const customerMailOptions = {
      from: `"Quido Conciergerie" <${process.env.SMTP_USER}>`,
      to: data.email,
      subject: `Votre appel découverte est confirmé — ${dateFormatted} à ${data.time}`,
      text: `
Bonjour ${data.name},

Votre appel découverte est bien confirmé !

📅 ${dateFormatted}
🕐 ${data.time} — Durée : 30 minutes

Notre équipe vous appellera directement au ${data.phone} à l'heure convenue. Préparez vos questions, nous sommes là pour vous guider.

À très vite,
L'équipe Quido Conciergerie.
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #111; padding: 30px; border: 1px solid #E8E8E8; border-radius: 10px;">
          <h2 style="color: #00cdb4; font-weight: normal; margin-top: 0;">Appel <strong style="color: #111;">confirmé.</strong></h2>
          <p style="font-size: 16px;">Bonjour <strong>${data.name}</strong>,</p>
          <p style="font-size: 16px; line-height: 1.5;">Votre appel découverte est bien enregistré !</p>
          
          <div style="background: #f8f8f8; border-radius: 10px; padding: 20px; margin: 20px 0; text-align: center;">
            <p style="font-size: 18px; font-weight: bold; margin: 5px 0;">📅 ${dateFormatted}</p>
            <p style="font-size: 20px; color: #00cdb4; font-weight: bold; margin: 5px 0;">🕐 ${data.time}</p>
            <p style="color: #888; margin: 5px 0;">Durée : 30 minutes</p>
          </div>

          <p style="font-size: 16px; line-height: 1.5;">Notre équipe vous appellera directement au <strong>${data.phone}</strong> à l'heure convenue.</p>
          <p style="font-size: 16px; line-height: 1.5; margin-top: 30px;">À très bientôt,<br/><br/><strong>L'équipe Quido Conciergerie</strong></p>
        </div>
      `
    };

    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(customerMailOptions);

    return NextResponse.json({ message: 'Rendez-vous confirmé' }, { status: 200 });

  } catch (error) {
    console.error('Erreur lors de l\'envoi:', error);
    return NextResponse.json({ message: 'Erreur technique' }, { status: 500 });
  }
}
