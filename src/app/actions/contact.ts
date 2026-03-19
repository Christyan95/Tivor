"use server";

import prisma from "@/lib/prisma";
import { contactSchema, type ContactFormData } from "@/lib/validations";
import { headers } from "next/headers";
import { sendLeadEmailNotification } from "@/lib/mail";

/**
 * CORE SERVICE: submitContactForm
 * Architecture: Clean Code
 */
export async function submitContactForm(data: ContactFormData) {
  const headerList = await headers();
  const clientIp = headerList.get("x-forwarded-for") || "internal";
  const userAgent = headerList.get("user-agent") || "unknown";

  try {
    // 1. Rigorous Data Validation
    const validation = contactSchema.safeParse(data);
    if (!validation.success) {
      return { error: "Inconsistência nos dados enviados." };
    }

    const { name, email, company, message, honeypot } = validation.data;

    // 2. Intelligent Spam Filter (Honeypot)
    if (honeypot) {
      console.warn(`[SECURITY AUDIT] Spam Blocked | IP: ${clientIp} | Email: ${email}`);
      return { error: "Requisição rejeitada por política de segurança." };
    }

    // 3. Sovereign Data Persistence & Security Audit
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

    // 4. Traceability & Logging
    console.info(`[BUSINESS LOG] New Lead Captured | ID: ${lead.id} | Origin: ${clientIp}`);

    // 5. Enterprise Notification (Asynchronous/Fire-and-forget style)
    // We don't await this to keep the user experience ultra-fast, 
    // but we handle errors in the background service logic.
    sendLeadEmailNotification({ name, email, company, message }).catch(err => {
      console.error(`[CRITICAL] Background Notification Failed for Lead ${lead.id}`, err);
    });

    return {
      success: true,
      id: lead.id,
      message: "Recebemos sua mensagem. Em breve entraremos em contato."
    };

  } catch (error) {
    console.error(`[SYSTEM ERROR] Runtime failure at submission:`, error);
    return {
      error: "Desculpe, ocorreu um erro técnico. Por favor, tente novamente em alguns instantes."
    };
  }
}
