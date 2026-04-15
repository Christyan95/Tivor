/**
 * Serviço de E-mail de Elite TIVOR
 * Padrão: Microsoft Graph API (OAuth 2.0 Client Credentials)
 * Benefício: Imune a bloqueios de SMTP e Security Defaults.
 */

interface SendLeadNotificationArgs {
  name: string
  email: string
  company?: string | null
  message: string
}

/**
 * Segurança Master: Escapes de caracteres para prevenir injeção de HTML no corpo do e-mail.
 */
function escapeHTML(str: string): string {
  const p = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;'
  }
  return str.replace(/[&<>"'/]/g, s => p[s as keyof typeof p])
}

// In-memory cache for Azure token to improve performance
let cachedToken: string | null = null;
let tokenExpiry: number | null = null;

async function getAzureAccessToken() {
  const now = Date.now();
  
  // Return cached token if still valid (using a 5-minute buffer)
  if (cachedToken && tokenExpiry && now < (tokenExpiry - 300000)) {
    return cachedToken;
  }

  const tenantId = process.env.AZURE_TENANT_ID
  const clientId = process.env.AZURE_CLIENT_ID
  const clientSecret = process.env.AZURE_CLIENT_SECRET

  if (!tenantId || !clientId || !clientSecret) {
    throw new Error('Configuração incompleta do Azure. Verifique .env (TENANT, CLIENT e SECRET).')
  }

  const endpoint = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`
  const body = new URLSearchParams({
    client_id: clientId,
    client_secret: clientSecret,
    scope: 'https://graph.microsoft.com/.default',
    grant_type: 'client_credentials',
  })

  const response = await fetch(endpoint, {
    method: 'POST',
    body,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  })

  if (!response.ok) {
    const errorText = await response.text()
    console.error('[AZURE AUTH] Falha ao obter access token:', errorText)
    throw new Error(`Falha na autenticação do Azure: ${response.statusText}`)
  }

  const data = await response.json()
  
  // Cache the token (expires_in is usually 3600 seconds)
  cachedToken = data.access_token;
  tokenExpiry = now + (data.expires_in * 1000);
  
  return cachedToken
}

export async function sendLeadEmailNotification({ name, email, company, message }: SendLeadNotificationArgs) {
  try {
    const accessToken = await getAzureAccessToken()
    const senderEmail = process.env.AZURE_SENDER_USER_EMAIL || 'workflow@hortsoy.com.br'
    const targetEmail = process.env.SITE_CONTACT_EMAIL || 'atendimento@tivor.agr.br'
    const fromName = process.env.SMTP_FROM_NAME || 'TIVOR Institutional'

    const endpoint = `https://graph.microsoft.com/v1.0/users/${senderEmail}/sendMail`

    const mailData = {
      message: {
        subject: `[LEAD SITE] Novo contato de ${name}`,
        body: {
          contentType: 'HTML',
          content: `
<!DOCTYPE html>
<html lang="pt-br" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="x-apple-disable-message-reformatting">
    <title>Novo Lead Capturado - TIVOR Site</title>
    <!--[if gte mso 9]>
    <xml>
        <o:OfficeDocumentSettings>
            <o:AllowPNG/>
            <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;700&display=swap" rel="stylesheet">
    
    <style>
        /* --- RESET E BASE --- */
        body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
        table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
        img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; display: block; }
        table { border-collapse: collapse !important; }
        body { height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important; font-family: 'Inter', Helvetica, Arial, sans-serif; background-color: #f1f5f9; color: #1e293b; }
        
        /* Responsividade para Mobile */
        @media screen and (max-width: 600px) {
            .main-container { width: 100% !important; max-width: 100% !important; }
            .mobile-p { padding-left: 20px !important; padding-right: 20px !important; }
            h1 { font-size: 24px !important; }
            .stack-mobile { display: block !important; width: 100% !important; padding-left: 0 !important; padding-right: 0 !important; margin-bottom: 15px !important; }
            .mobile-pad-top { padding-top: 15px !important; padding-left: 0 !important; }
        }
    </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9;">

    <!-- WRAPPER GERAL -->
    <table class="wrapper" role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f1f5f9; table-layout: fixed;">
        <tr>
            <td align="center" style="padding-top: 40px; padding-bottom: 40px;">
                
                <!-- TRUQUE "GHOST TABLE" PARA OUTLOOK (Força largura 600px) -->
                <!--[if mso]>
                <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">
                <tr>
                <td align="center" valign="top" width="600">
                <![endif]-->

                <!-- VML Wrapper para Bordas Arredondadas no Outlook -->
                <!--[if mso]>
                <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="#" style="width:600px;v-text-anchor:top;" arcsize="3%" stroke="t" strokecolor="#DDDDDD" fillcolor="#ffffff">
                <v:textbox inset="0,0,0,0">
                <center>
                <![endif]-->

                <!-- CONTAINER PRINCIPAL (Fundo Branco com Bordas Arredondadas) -->
                <table class="main-container" role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1); margin: 0 auto; border-collapse: separate !important;">
                    
                    <!-- HEADER INSTITUCIONAL (Azul TIVOR) -->
                    <tr>
                        <td align="center" bgcolor="#0c4a6e" style="background-color: #0c4a6e; background-image: linear-gradient(180deg, #0c4a6e 0%, #075985 100%); padding: 40px 20px; border-radius: 12px 12px 0 0;">
                            <h1 style="margin: 0; margin-bottom: 5px; font-family: 'Poppins', sans-serif; font-size: 26px; line-height: 1.3; color: #ffffff; font-weight: 700;">
                                Novo Lead Capturado
                            </h1>
                            <p style="margin: 0; font-family: 'Poppins', sans-serif; font-size: 16px; color: #38bdf8; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">
                                TIVOR Site
                            </p>
                        </td>
                    </tr>

                    <!-- CORPO DO E-MAIL -->
                    <tr>
                        <td class="mobile-p" style="padding: 40px 45px 30px 45px; background-color: #ffffff; vertical-align: top;">

                            <p style="margin: 0; margin-bottom: 25px; font-family: 'Inter', sans-serif; font-size: 15px; color: #475569; line-height: 1.6; text-align: center;">
                                Um novo contato foi registrado através do formulário do site. Confira os detalhes abaixo:
                            </p>

                            <!-- BOX DE DADOS DO LEAD (Fundo Azul Claro) -->
                            <div style="margin-bottom: 30px;">
                                <table width="100%" role="presentation" border="0" cellpadding="0" cellspacing="0" style="background-color: #f0f9ff; border: 1px solid #e0f2fe; border-left: 5px solid #0ea5e9; border-radius: 8px;">
                                    <tr>
                                        <td style="padding: 25px;">
                                            <p style="margin: 0 0 15px 0; font-family: 'Poppins', sans-serif; font-size: 13px; font-weight: 700; text-transform: uppercase; color: #0c4a6e; letter-spacing: 1px; border-bottom: 1px solid #bae6fd; padding-bottom: 10px;">
                                                👤 Dados de Contato
                                            </p>
                                            
                                            <table width="100%" role="presentation" border="0" cellpadding="0" cellspacing="0">
                                                <tr>
                                                    <td width="30%" style="padding: 8px 0; font-family: 'Inter', sans-serif; font-size: 14px; color: #475569; font-weight: 600;">Nome:</td>
                                                    <td width="70%" style="padding: 8px 0; font-family: 'Inter', sans-serif; font-size: 15px; color: #0f172a; font-weight: 500;">
                                                        ${escapeHTML(name)}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td width="30%" style="padding: 8px 0; font-family: 'Inter', sans-serif; font-size: 14px; color: #475569; font-weight: 600;">E-mail:</td>
                                                    <td width="70%" style="padding: 8px 0; font-family: 'Inter', sans-serif; font-size: 15px; font-weight: 500;">
                                                        <a href="mailto:${email}" style="color: #0ea5e9; text-decoration: none;">${email}</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td width="30%" style="padding: 8px 0; font-family: 'Inter', sans-serif; font-size: 14px; color: #475569; font-weight: 600;">Empresa:</td>
                                                    <td width="70%" style="padding: 8px 0; font-family: 'Inter', sans-serif; font-size: 15px; color: #0f172a; font-weight: 500;">
                                                        ${company ? escapeHTML(company) : 'Não informado'}
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </div>

                            <!-- BOX DE MENSAGEM CORPORATIVA -->
                            <div style="margin-bottom: 20px;">
                                <table width="100%" role="presentation" border="0" cellpadding="0" cellspacing="0" style="background-color: #f0f9ff; border: 1px solid #e0f2fe; border-left: 5px solid #0ea5e9; border-radius: 8px;">
                                    <tr>
                                        <td style="padding: 25px;">
                                            <p style="margin: 0 0 15px 0; font-family: 'Poppins', sans-serif; font-size: 13px; font-weight: 700; text-transform: uppercase; color: #0c4a6e; letter-spacing: 1px; border-bottom: 1px solid #bae6fd; padding-bottom: 10px;">
                                                💬 Mensagem Corporativa
                                            </p>
                                            <div style="font-family: 'Inter', sans-serif; font-size: 15px; color: #334155; line-height: 1.6; font-style: italic; padding-top: 10px;">
                                                ${escapeHTML(message).replace(/\n/g, '<br>')}
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </div>

                        </td>
                    </tr>

                    <!-- FOOTER TÉCNICO (Dados de Autenticação e Captura) -->
                    <tr>
                        <td align="center" style="padding: 0 45px 30px 45px; background-color: #ffffff;">
                            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                                <tr>
                                    <td style="border-top: 1px solid #e2e8f0; padding-top: 20px; text-align: center;">
                                        <p style="margin: 0 0 5px 0; font-family: 'Inter', sans-serif; font-size: 12px; color: #64748b;">
                                            <strong style="color: #475569;">Remetente Oficial:</strong> ${fromName} | Autenticado via Microsoft Graph
                                        </p>
                                        <p style="margin: 0; font-family: 'Inter', sans-serif; font-size: 12px; color: #94a3b8;">
                                            Data de Captura: ${new Date().toLocaleDateString('pt-BR')} às ${new Date().toLocaleTimeString('pt-BR')}
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- FOOTER SÓLIDO INSTITUCIONAL (Azul Escuro) -->
                    <tr>
                        <td align="center" bgcolor="#082f49" style="background-color: #082f49; padding: 25px 30px; border-radius: 0 0 12px 12px;">
                            <p style="color: #94a3b8; font-size: 12px; margin: 0; line-height: 1.5; font-family: 'Inter', sans-serif;">
                                Notificação automática gerada pelo sistema TIVOR. Por favor, não responda.
                            </p>
                        </td>
                    </tr>
                </table>
                
                <!--[if mso]>
                </center>
                </v:textbox>
                </v:roundrect>
                <![endif]-->

                <!--[if mso]>
                </td>
                </tr>
                </table>
                <![endif]-->

                <!-- Espaço extra no final -->
                <div style="height: 40px;">&nbsp;</div>
                
            </td>
        </tr>
    </table>

</body>
</html>
          `
        },
        toRecipients: [
          {
            emailAddress: {
              address: targetEmail
            }
          }
        ],
        from: {
          emailAddress: {
            name: fromName,
            address: senderEmail
          }
        }
      },
      saveToSentItems: 'true'
    }

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(mailData)
    })

    if (!response.ok) {
      const errorDetail = await response.text()
      console.error('[GRAPH API] Erro ao enviar e-mail:', errorDetail)
      throw new Error(`Erro na Graph API: ${response.statusText}`)
    }

    console.info(`[Email Service] Lead notificado com sucesso via Microsoft Graph API para: ${targetEmail}`)
    return { success: true }

  } catch (error) {
    console.error('[Email Service] Falha final na notificação:', error)
    return { success: false, error }
  }
}
