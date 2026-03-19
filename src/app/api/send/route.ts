import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, company, message, honeypot } = await request.json();

    // Bloqueio simples de spam via honeypot
    if (honeypot) {
      return NextResponse.json({ error: "Spam detectado" }, { status: 400 });
    }

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Campos obrigatórios faltando" }, { status: 400 });
    }

    console.log('Tentando enviar e-mail via Resend...', { name, email, company });
    console.log('API Key existe?', !!process.env.RESEND_API_KEY);
    console.log('Email de destino:', process.env.CONTACT_EMAIL || 'atendimento@tivor.agr.br');

    const data = await resend.emails.send({
      from: 'Tivor Site <contato@tivor.agr.br>',
      to: [process.env.CONTACT_EMAIL || 'atendimento@tivor.agr.br'],
      subject: `Novo Contato: ${name} - Tivor`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; color: #1e293b;">
          <h2 style="color: #059669; margin-top: 0;">Novo Lead - Landing Page Tivor</h2>
          <p>Você recebeu uma nova mensagem através do formulário de contato do site.</p>
          
          <div style="background-color: #f8fafc; padding: 16px; border-radius: 8px; margin-top: 20px;">
            <p style="margin: 8px 0;"><strong>Nome:</strong> ${name}</p>
            <p style="margin: 8px 0;"><strong>E-mail:</strong> ${email}</p>
            <p style="margin: 8px 0;"><strong>Empresa:</strong> ${company || 'Não informada'}</p>
          </div>

          <div style="margin-top: 24px;">
            <p><strong>Mensagem:</strong></p>
            <p style="white-space: pre-wrap; line-height: 1.6; color: #475569;">${message}</p>
          </div>
          
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 32px 0;" />
          <p style="font-size: 12px; color: #94a3b8; text-align: center;">Este é um e-mail automático enviado pelo sistema da Landing Page Tivor.</p>
        </div>
      `,
    });

    console.log('Resposta do Resend:', data);

    if (data.error) {
      console.error('Erro retornado pelo Resend:', data.error);
      return NextResponse.json({ error: data.error }, { status: 400 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Erro na rota de API:', error);
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
