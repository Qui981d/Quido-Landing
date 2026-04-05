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

    const adminMailOptions = {
      from: `"${data.name}" <${process.env.SMTP_USER}>`,
      replyTo: data.email,
      to: process.env.EMAIL_RECEIVER || process.env.SMTP_USER,
      subject: `✉️ Nouveau message de contact : ${data.name}`,
      text: `
Nouvelle demande de contact reçue sur Quido Conciergerie.

CONTACT :
- Nom : ${data.name}
- Email : ${data.email}
- Téléphone : ${data.phone || 'Non renseigné'}

MESSAGE :
${data.message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #111;">
          <h2 style="color: #00cdb4;">✉️ Nouveau message de contact</h2>
          <p>Une personne a utilisé le formulaire de contact général.</p>
          
          <h3 style="border-bottom: 1px solid #E8E8E8; padding-bottom: 5px;">Coordonnées</h3>
          <ul style="list-style: none; padding: 0;">
            <li style="margin-bottom: 10px;"><strong>Nom:</strong> ${data.name}</li>
            <li style="margin-bottom: 10px;"><strong>Email:</strong> <a href="mailto:${data.email}" style="color:#00cdb4">${data.email}</a></li>
            <li style="margin-bottom: 10px;"><strong>Téléphone:</strong> ${data.phone ? `<a href="tel:${data.phone}" style="color:#00cdb4">${data.phone}</a>` : 'Non renseigné'}</li>
          </ul>

          <h3 style="border-bottom: 1px solid #E8E8E8; padding-bottom: 5px;">Message</h3>
          <p style="background: #f8f8f8; padding: 15px; border-radius: 8px; white-space: pre-wrap;">${data.message}</p>
        </div>
      `
    };

    // 2. Email Confirmation Client
    const customerMailOptions = {
      from: `"Quido Conciergerie" <${process.env.SMTP_USER}>`,
      to: data.email,
      subject: `Votre message a bien été envoyé`,
      text: `
Bonjour ${data.name},

Nous avons bien reçu votre message et nous vous en remercions.
Notre équipe en a pris connaissance et vous répondra dans les plus brefs délais.

Rappel de votre message :
${data.message}

À très bientôt,
L'équipe Quido Conciergerie.
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #111; padding: 30px; border: 1px solid #E8E8E8; border-radius: 10px;">
          <h2 style="color: #00cdb4; font-weight: normal; margin-top: 0;">Message <strong style="color: #111;">bien reçu.</strong></h2>
          <p style="font-size: 16px;">Bonjour <strong>${data.name}</strong>,</p>
          <p style="font-size: 16px; line-height: 1.5;">Nous avons bien reçu votre demande et nous vous en remercions.</p>
          <p style="font-size: 16px; line-height: 1.5;">Notre équipe, basée dans le Pays de Gex, vous répondra dans les plus brefs délais.</p>
          
          <div style="background: #f8f8f8; border-radius: 10px; padding: 20px; margin: 20px 0;">
            <p style="color: #888; font-size: 14px; margin-top: 0;">RAPPEL DE VOTRE MESSAGE :</p>
            <p style="font-size: 16px; margin: 0; white-space: pre-wrap;">${data.message}</p>
          </div>

          <p style="font-size: 16px; line-height: 1.5; margin-top: 30px;">À très bientôt,<br/><br/><strong>L'équipe Quido Conciergerie</strong></p>
        </div>
      `
    };

    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(customerMailOptions);

    return NextResponse.json({ message: 'Message envoyé' }, { status: 200 });

  } catch (error) {
    console.error("Erreur lors de l'envoi:", error);
    return NextResponse.json({ message: 'Erreur technique' }, { status: 500 });
  }
}
