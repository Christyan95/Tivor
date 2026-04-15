import * as z from "zod";

export const contactSchema = z.object({
    name: z.string().trim().min(3, "O nome deve ter pelo menos 3 caracteres").max(100, "Nome muito longo"),
    email: z.string().trim().email("E-mail inválido").max(150, "E-mail muito longo"),
    company: z.string().trim().max(100, "Nome da empresa muito longo").optional(),
    message: z.string().trim().min(10, "A mensagem deve ter pelo menos 10 caracteres").max(2000, "Mensagem muito longa"),
    honeypot: z.string().trim().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
