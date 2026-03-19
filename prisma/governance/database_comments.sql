-- ====================================================================================
-- TIVOR CORPORATE DATA GOVERNANCE - WIKI
-- Script para recriação de comentários e metadados no Dicionário do PostgreSQL.
-- Objetivo: Facilitar o conhecimento do negócio diretamente via SQL Client.
-- ====================================================================================

-- 1. Tabela de Leads Institucionais
COMMENT ON TABLE public."SITE_CONT" IS 'Armazena a orquestração de leads capturados via landing page institucional TIVOR.';

-- 2. Colunas de Identificação e Contato
COMMENT ON COLUMN public."SITE_CONT"."UUID_CONT" IS 'Identificador Primário Único gerado via UUID de alta entropia.';
COMMENT ON COLUMN public."SITE_CONT"."NOME_CONT" IS 'Exibição do Nome Completo conforme inserido pelo usuário no frontend.';
COMMENT ON COLUMN public."SITE_CONT"."MAIL_CONT" IS 'E-mail principal para contato e retorno institucional.';
COMMENT ON COLUMN public."SITE_CONT"."EMPR_CONT" IS 'Nome da empresa associada ao lead (opcional).';

-- 3. Conteúdo e Auditoria Master
COMMENT ON COLUMN public."SITE_CONT"."MENS_CONT" IS 'Mensagem integral enviada pelo solicitante.';
COMMENT ON COLUMN public."SITE_CONT"."IP_CONT"   IS 'Endereço IP do solicitante para rastreabilidade e auditoria (Senior Master Audit).';
COMMENT ON COLUMN public."SITE_CONT"."UA_CONT"   IS 'User-Agent (Navegador/SO) capturado para diagnóstico técnico.';
COMMENT ON COLUMN public."SITE_CONT"."CREA_CONT" IS 'Timestamp exato da criação do registro no lado do servidor.';
COMMENT ON COLUMN public."SITE_CONT"."TIME_CONT" IS 'Automated Update Timestamp do Prisma 7.';

-- 4. Índice de Performance
COMMENT ON INDEX public."idx_site_cont_mail" IS 'Otimiza a busca por e-mail para campanhas futuras ou deduplicação.';
