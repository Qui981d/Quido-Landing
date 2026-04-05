import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true, // true for 465, false for 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const amenitiesList = data.amenities && data.amenities.length > 0 
      ? data.amenities.join(', ') 
      : 'Aucun équipement spécifique sélectionné';

    // 1. Email Admin (Pour vous)
    const adminMailOptions = {
      from: `"${data.name}" <${process.env.SMTP_USER}>`,
      replyTo: data.email,
      to: process.env.EMAIL_RECEIVER || process.env.SMTP_USER,
      subject: `Nouvelle demande d'estimation : ${data.name}`,
      text: `
Nouvelle demande d'estimation reçue sur Quido Conciergerie.

DÉTAILS DU CONTACT :
- Nom : ${data.name}
- Email : ${data.email}
- Téléphone : ${data.phone}

DÉTAILS DU BIEN :
- Type : ${data.type}
- Localisation : ${data.location}
- Surface : ${data.surface} m²
- Pièces : ${data.rooms}
- Salles de bain : ${data.bathrooms}

ÉQUIPEMENTS :
${amenitiesList}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #111;">
          <h2 style="color: #00cdb4;">Nouvelle demande d'estimation</h2>
          <p>Un visiteur a soumis une nouvelle demande sur Quido Conciergerie.</p>
          
          <h3 style="border-bottom: 1px solid #E8E8E8; padding-bottom: 5px;">Coordonnées</h3>
          <ul style="list-style: none; padding: 0;">
            <li style="margin-bottom: 10px;"><strong>Nom:</strong> ${data.name}</li>
            <li style="margin-bottom: 10px;"><strong>Email:</strong> <a href="mailto:${data.email}" style="color:#00cdb4">${data.email}</a></li>
            <li style="margin-bottom: 10px;"><strong>Téléphone:</strong> <a href="tel:${data.phone}" style="color:#00cdb4">${data.phone}</a></li>
          </ul>

          <h3 style="border-bottom: 1px solid #E8E8E8; padding-bottom: 5px;">Le Bien</h3>
          <ul style="list-style: none; padding: 0;">
            <li style="margin-bottom: 10px;"><strong>Type:</strong> ${data.type}</li>
            <li style="margin-bottom: 10px;"><strong>Localisation:</strong> ${data.location}</li>
            <li style="margin-bottom: 10px;"><strong>Surface:</strong> ${data.surface} m²</li>
            <li style="margin-bottom: 10px;"><strong>Pièces:</strong> ${data.rooms}</li>
            <li style="margin-bottom: 10px;"><strong>Salles de bain:</strong> ${data.bathrooms}</li>
          </ul>

          <h3 style="border-bottom: 1px solid #E8E8E8; padding-bottom: 5px;">Équipements</h3>
          <p>${amenitiesList}</p>
        </div>
      `
    };

    // 2. Email Utilisateur (Confirmation sous 48h)
    const customerMailOptions = {
      from: `"Quido Conciergerie" <${process.env.SMTP_USER}>`,
      to: data.email,
      subject: `Votre demande d'estimation Quido a bien été reçue.`,
      text: `
Bonjour ${data.name},

Nous avons bien reçu votre demande concernant votre bien situé à ${data.location}.

L'un de nos experts va analyser vos informations attentivement et vous recontactera sous 48 heures pour vous livrer une estimation précise de votre potentiel locatif.

À très vite,
L'équipe Quido Conciergerie.
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #111; padding: 30px; border: 1px solid #E8E8E8; border-radius: 10px;">
          <h2 style="color: #00cdb4; font-weight: normal; margin-top: 0;">Demande <strong style="color: #111;">enregistrée.</strong></h2>
          <p style="font-size: 16px;">Bonjour <strong>${data.name}</strong>,</p>
          <p style="font-size: 16px; line-height: 1.5;">Nous avons bien reçu votre demande d'estimation pour votre bien situé à ${data.location}.</p>
          <p style="font-size: 16px; line-height: 1.5;">L'un de nos experts va analyser vos informations avec soin et vous contactera <strong>sous 48 heures</strong> pour vous présenter votre potentiel locatif.</p>
          <p style="font-size: 16px; line-height: 1.5; margin-top: 30px;">À très bientôt,<br/><br/><strong>L'équipe Quido Conciergerie</strong></p>
        </div>
      `
    };

    // Envoi séquentiel des deux mails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(customerMailOptions);

    return NextResponse.json({ message: 'Demande envoyée avec succès' }, { status: 200 });

  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return NextResponse.json({ message: 'Erreur technique lors de l\'envoi' }, { status: 500 });
  }
}
