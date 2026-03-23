// src/lib/constants.ts

/**
 * YouTube Institutional Video ID
 */
export const INSTITUTIONAL_VIDEO_ID = "xlu4orpDqMI";

/**
 * Social Media Media Links
 */
export const SOCIAL_LINKS = {
    LINKEDIN: "https://www.linkedin.com/company/tivor-financial-architecture/",
    INSTAGRAM: null, // Placeholder para futuras expansões
    WHATSAPP: (phone: string) => `https://wa.me/${phone.replace(/\D/g, "")}`,
};

/**
 * Brand Configuration and Constraints
 */
export const BRAND_CONFIG = {
    NAME: "TIVOR",
    FULL_NAME: "TIVOR Financial Architecture",
    CONTACT_EMAIL: "atendimento@tivor.agr.br",
};
