import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nom, email, telephone, typePrestation, date, message } = body;

    // Validation basique
    if (!nom || !email || !typePrestation || !message) {
      return NextResponse.json(
        { error: 'Champs requis manquants' },
        { status: 400 }
      );
    }

    // Ici vous pourriez :
    // 1. Envoyer un email avec Nodemailer
    // 2. Sauvegarder en base de données
    // 3. Envoyer vers un service tiers (Zapier, etc.)
    
    // Simulation d'un traitement
    console.log('Nouvelle demande de contact:', {
      nom,
      email,
      telephone,
      typePrestation,
      date,
      message,
      timestamp: new Date().toISOString()
    });

    // Réponse success
    return NextResponse.json({
      success: true,
      message: 'Demande envoyée avec succès'
    });

  } catch (error) {
    console.error('Erreur API contact:', error);
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}