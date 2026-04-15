"use server";

import prisma from "@/lib/prisma";
import { contactSchema, type ContactFormData } from "@/lib/validations";
import { headers } from "next/headers";
import { sendLeadEmailNotification } from "@/lib/mail";

/**
 * CORE SERVICE: submitContactForm
 * Architecture: Clean Code | Senior Security Pattern
 */
export async function submitContactForm(data: ContactFormData) {
  const headerList = await headers();
  const clientIp = headerList.get("x-forwarded-for") || "internal";
  const userAgent = headerList.get("user-agent") || "unknown";

  try {
    // 1. Rigorous Data Validation
    const validation = contactSchema.safeParse(data);
    if (!validation.success) {
      return { error: "Inconsistência nos dados enviados. Por favor, verifique os campos." };
    }

    const { name, email, company, message, honeypot } = validation.data;
    const now = new Date();
    const fiveMinutesAgo = new Date(now.getTime() - 5 * 60 * 1000);

    // 2. Multi-Layer Spam Protection
    
    // LAYER A: Honeypot (Bot Filter)
    if (honeypot) {
      console.warn(`[SECURITY AUDIT] Honeypot Triggered | IP: ${clientIp} | Email: ${email}`);
      return { error: "Requisição rejeitada por política de segurança." };
    }

    // LAYER B: Business Level Rate Limiting (IP-based)
    // Prevents DoS on Email Service and DB flooding
    const recentSubmissions = await prisma.lead.count({
      where: {
        ip: clientIp,
        createdAt: { gte: fiveMinutesAgo }
      }
    });

    if (recentSubmissions >= 3) {
      console.warn(`[SECURITY AUDIT] Rate Limit Exceeded | IP: ${clientIp} | Email: ${email}`);
      return { error: "Muitas tentativas. Por favor, aguarde alguns minutos antes de tentar novamente." };
    }

    // 3. Sovereign Data Persistence
    const lead = await prisma.lead.create({
      data: {
        name,
        email,
        company: company || null,
        message,
        ip: clientIp,
        userAgent: userAgent
      },
      select: { id: true }
    });

    // 4. Traceability & Business Logging
    console.info(`[BUSINESS LOG] New Lead Captured | ID: ${lead.id} | Origin: ${clientIp}`);

    // 5. Enterprise Notification Service (Async)
    // Fire-and-forget pattern with localized error handling
    sendLeadEmailNotification({ name, email, company, message }).catch(err => {
      console.error(`[CRITICAL] Background Notification Failed for Lead ${lead.id}`, err);
    });

    return {
      success: true,
      id: lead.id,
      message: "Recebemos sua mensagem. Em breve entraremos em contato."
    };

  } catch (error) {
    console.error(`[SYSTEM ERROR] Critical failure at submission:`, error);
    return {
      error: "Desculpe, ocorreu um erro técnico interno. Nossa equipe foi notificada."
    };
  }
}
