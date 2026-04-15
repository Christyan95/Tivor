-- ====================================================================================
-- TIVOR PROJECT - MASTER DATABASE SCHEMA (SITE_CONT)
-- Autor: Senior Architect / Antigravity
-- Data: 2026-03-20
-- Objetivo: Provedor de Leads via Landing Page Institucional
-- ====================================================================================

BEGIN;

-- 1. Criação da Tabela Lead (SITE_CONT)
-- Auditoria de Identificadores: Uso de gen_random_uuid para alta entropia.
CREATE TABLE IF NOT EXISTS public."SITE_CONT" (
    "UUID_CONT" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "NOME_CONT" VARCHAR(255) NOT NULL,
    "MAIL_CONT" VARCHAR(255) NOT NULL,
    "EMPR_CONT" VARCHAR(150),
    "MENS_CONT" TEXT NOT NULL,
    
    -- Auditoria Técnica (Master Level Audit)
    "IP_CONT"   VARCHAR(45), -- Compatibilidade IPv4/IPv6
    "UA_CONT"   TEXT,        -- Identificação do User Agent (Navegador/SO)
    
    -- Controle de AuditTrail Chrono
    "CREA_CONT" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "TIME_CONT" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- 2. Performance & Search Optimization
-- Indexação Master do e-mail para buscas rápidas e deduplicação
CREATE INDEX IF NOT EXISTS "idx_site_cont_mail" ON public."SITE_CONT" ("MAIL_CONT");

-- 3. Data Governance (Dicionário de Metadados)
-- Ativação da Governança diretamente no Catálogo do PostgreSQL
COMMENT ON TABLE public."SITE_CONT" IS 'Armazena a orquestração de leads capturados via landing page institucional TIVOR.';
COMMENT ON COLUMN public."SITE_CONT"."UUID_CONT" IS 'Identificador Primário Único gerado via UUID de alta entropia.';
COMMENT ON COLUMN public."SITE_CONT"."NOME_CONT" IS 'Exibição do Nome Completo conforme inserido pelo usuário no frontend.';
COMMENT ON COLUMN public."SITE_CONT"."MAIL_CONT" IS 'E-mail principal para contato e retorno institucional.';
COMMENT ON COLUMN public."SITE_CONT"."EMPR_CONT" IS 'Nome da empresa associada ao lead (opcional).';
COMMENT ON COLUMN public."SITE_CONT"."MENS_CONT" IS 'Mensagem integral enviada pelo solicitante.';
COMMENT ON COLUMN public."SITE_CONT"."IP_CONT"   IS 'Endereço IP do solicitante para rastreabilidade e auditoria (Senior Master Audit).';
COMMENT ON COLUMN public."SITE_CONT"."UA_CONT"   IS 'User-Agent (Navegador/SO) capturado para diagnóstico técnico.';
COMMENT ON COLUMN public."SITE_CONT"."CREA_CONT" IS 'Timestamp exato da criação do registro no lado do servidor.';
COMMENT ON COLUMN public."SITE_CONT"."TIME_CONT" IS 'Automated Update Timestamp do PostgreSQL Audit Engine.';

-- 4. Automation Layer (Trigger-Based UpdatedAt - Mastery)
-- Garante a integridade cronológica absoluta mesmo em alterações manuais (Direct SQL)
CREATE OR REPLACE FUNCTION public.fn_update_chrono_timestamp()
RETURNS TRIGGER AS $$
BEGIN
    NEW."TIME_CONT" = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS tr_site_cont_audit ON public."SITE_CONT";
CREATE TRIGGER tr_site_cont_audit
    BEFORE UPDATE ON public."SITE_CONT"
    FOR EACH ROW
    EXECUTE FUNCTION public.fn_update_chrono_timestamp();

-- 5. Seed Insertion (Sample Master Data for Onboarding)
-- Inserção de registro de auditoria inicial
INSERT INTO public."SITE_CONT" (
    "NOME_CONT", 
    "MAIL_CONT", 
    "EMPR_CONT", 
    "MENS_CONT", 
    "IP_CONT", 
    "UA_CONT"
) VALUES 
(
    'Christyan Silva', 
    'christyan.silva@tivor.com.br', 
    'Tivor IT Architecture', 
    'Solicito a implementação imediata do ecossistema de dados master.', 
    '127.0.0.1', 
    'Mozilla/5.0 (Environment Agent; Senior Master Power)'
);

COMMIT;

-- Fim do Script Master SITE_CONT
