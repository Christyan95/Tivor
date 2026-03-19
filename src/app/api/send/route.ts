import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { contactSchema } from '@/lib/validations';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validação master via Zod
    const validation = contactSchema.safeParse(body);
    
    if (!validation.success) {
      return NextResponse.json({ error: "Dados inválidos" }, { status: 400 });
    }

    const { name, email, company, message, honeypot } = validation.data;

    // Bloqueio robusto de spam via honeypot
    if (honeypot) {
      return NextResponse.json({ error: "Spam detectado" }, { status: 400 });
    }

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

    if (data.error) {
       // Log de erro real apenas no servidor, retorno sanitizado para o cliente
      console.error('API Error:', data.error);
      return NextResponse.json({ error: "Falha ao processar envio" }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data.data?.id });
  } catch (error) {
    console.error('Core Error:', error);
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 });
  }
}

