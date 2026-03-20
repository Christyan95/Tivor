<div align="center">

# TIVOR — High Performance Financial Architecture
**Arquitetura Financeira e Governança para o Agronegócio**

[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?logo=next.js)](https://nextjs.org/)
[![Prisma 7](https://img.shields.io/badge/Prisma-7.5.0-black?logo=prisma)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-blue?logo=postgresql)](https://www.postgresql.org/)
[![Graph API](https://img.shields.io/badge/Microsoft_Graph-v1.0-blue?logo=microsoft-outlook)](https://learn.microsoft.com/en-us/graph/overview)

</div>

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Poder Superior (Soberania Digital)](#-poder-superior-soberania-digital)
- [Tecnologias Core](#-tecnologias-core)
- [Arquitetura Full-Stack Master](#-arquitetura-full-stack-master)
- [Governança de Dados (SITE_CONT)](#-governança-de-dados-site_cont)
- [Comunicação Enterprise (OAuth2)](#-comunicação-enterprise-oauth2)
- [Segurança & Auditoria](#-segurança--auditoria)
- [Configuração de Ambiente](#-configuração-de-ambiente)
- [Instalação & Manutenção](#-instalação--manutenção)

---

## 🎯 Sobre o Projeto

A **TIVOR** é uma corporação focada em Arquitetura Financeira e Governança de alto impacto para o ecossistema agrícola. Esta plataforma institucional foi projetada e desenvolvida por **Christyan Silva** para transparecer autoridade e excelência, integrando visualizações 3D de última geração com um backend robusto e soberano.


---

## 🏛️ Poder Superior (Soberania Digital)

Diferente de sistemas convencionais que dependem de middlewares externos (Resend, SendGrid), a TIVOR detém o controle absoluto de seus fluxos de dados:

*   **Banco de Dados Soberano:** Armazenamento local em PostgreSQL para conformidade total.
*   **Comunicação Direta Cloud:** Integração nativa com Microsoft Azure via OAuth 2.0 (Microsoft Graph).
*   **Zero Resíduos de Middleware:** Sem taxas ocultas de APIs de terceiros.

---

## 🛠 Tecnologias Core

### Frontend Elite
| Tecnologia | Versão | Uso |
|---|---|---|
| [Next.js](https://nextjs.org/) | 16.1.6 | Framework Master (SSR, App Router e Proxy Gateway) |
| [React](https://react.dev/) | 19.2.3 | Biblioteca de componentes UI moderna |
| [Framer Motion](https://motion.dev/) | 12.x | Animações de scroll e micro-interações sênior |
| [Three.js](https://threejs.org/) | 0.183 | Renderização 3D de alta performance |

### Backend Master
| Tecnologia | Versão | Uso |
|---|---|---|
| [Prisma](https://www.prisma.io/) | 7.5.0 | ORM de elite com Driver Native Adapter |
| [PostgreSQL](https://postgresql.org/) | 16.x | Banco de Dados Relacional soberano |
| [Microsoft Graph](https://graph.microsoft.com) | v1.0 | Comunicação de e-mail corporativa via OAuth2 |

---

## 🏗 Arquitetura Full-Stack Master

O fluxo de processamento de dados é projetado para escalabilidade e resiliência:

```
[Cliente] → [Component Contact] → [Server Action (Zod/Honeypot)]
                                       ↓
                               [Prisma 7 Singleton]
                                       ↓
                          [Audit Payload (IP/Device)] → [PostgreSQL (SITE_CONT)]
                                       ↓
                          [Microsoft Graph Auth] → [Notificação Outlook]
```

### Principais Pontos:
- **Server Actions:** Eliminação de rotas de API públicas (`/api/send`) em favor de procedimentos seguros do servidor.
- **Next.js 16 Proxy (`proxy.ts`):** Gateway inteligente para internacionalização (PT/EN) e segurança de rotas.
- **Prisma Client Efficiency:** Uso de Adaptadores Nativos para evitar latência em ambientes de nuvem.

---

## 📂 Governança de Dados (SITE_CONT)

A estrutura do banco de dados segue padrões corporativos de governança técnica.

### Tabela Oficial de Leads: `SITE_CONT`

| Coluna | Atributo | Descrição |
|---|---|---|
| `UUID_CONT` | UUID (PK) | Identificador Único Universal do Lead |
| `NOME_CONT` | String | Nome completo fornecido |
| `MAIL_CONT` | String | E-mail corporativo/pessoal |
| `EMPR_CONT` | String (Opt) | Empresa do solicitante |
| `MENS_CONT` | Text | Conteúdo da mensagem institucional |
| `IP_CONT` | String | Endereço IP de origem (Auditoria Forense) |
| `UA_CONT` | String | User-Agent do navegador (Auditoria Técnica) |
| `CREA_CONT` | DateTime | Timestamp de entrada automática |
| `TIME_CONT` | DateTime | Timestamp de última atualização |

---

## ☁️ Comunicação Enterprise (OAuth2)

A TIVOR utiliza o protocolo mais seguro de nuvem da Microsoft para notificações:

1.  **Auth Flow:** OAuth 2.0 Client Credentials (sem senha bruta).
2.  **Protocolo:** Microsoft Graph API (Porta 443 HTTPS).
3.  **Vantagem:** Imunidade a bloqueios de SMTP, MFA ou políticas de *Security Defaults*.
4.  **Assinatura Digital:** Os e-mails são assinados pela conta oficial da organização, garantindo alta entregabilidade (Anti-Spam).

---

## 🔒 Segurança & Auditoria

- **Honeypot de 2ª Camada:** Filtro invisível no servidor que rejeita envios automáticos de robôs sem pesar no processamento.
- **Validação Tipada Zod:** Bloqueio de injeções e dados malformados na entrada.
- **Trilha de Auditoria:** Log persistente de rede (IP/UA) para conformidade com normas digitais.
- **Resiliência:** O salvamento no banco é atômico. Se a notificação (e-mail) falhar, o lead **jamais** é perdido.

---

## ⚙️ Configuração de Ambiente

Crie um arquivo `.env` baseado no `.env.example`. Este arquivo é vital para a orquestração do banco e serviços de nuvem:

```env
# 1. DATABASE INFRASTRUCTURE (PostgreSQL)
DATABASE_URL="postgresql://tivor_admin:your_secure_password@localhost:5432/tivor_db?schema=public"

# 2. MICROSOFT GRAPH API AUTHENTICATION (OAuth 2.0)
AZURE_TENANT_ID="00000000-0000-0000-0000-000000000000"
AZURE_CLIENT_ID="00000000-0000-0000-0000-000000000000"
AZURE_CLIENT_SECRET="your_azure_app_secret_value"

# 3. NOTIFICATION SERVICE CONFIGURATION
AZURE_SENDER_USER_EMAIL="workflow@yourdomain.com.br"
SITE_CONTACT_EMAIL="atendimento@yourdomain.com.br"
SMTP_FROM_NAME="Friendly From"
```

---

## 🔄 Guia de Manutenção & Script Master

Para garantir a soberania dos dados e a persistência do esquema de leads, o projeto conta com um script SQL de referência absoluta.

### ⚠️ Inicialização da Tabela `SITE_CONT` (Master SQL)
Se você estiver resetando o banco ou iniciando em um novo ambiente, utilize o script localizado em:
**`prisma/governance/00_MASTER_SITE_CONT.sql`**

Este script executa em bloco:
1.  **Criação Física**: Tabela `SITE_CONT` com tipos otimizados.
2.  **Indexação**: Performance Master para o campo de e-mail.
3.  **Audit Trigger**: Gatilho SQL que garante a integridade do `updatedAt` independente do Prisma.
4.  **Data Governance**: Comentários de metadados no catálogo do PostgreSQL.

### Sincronização Prisma:
Sempre que alterar o banco ou o script master, gere o cliente:
```bash
npx prisma generate
```

---

## 🚀 Instalação & Manutenção

1.  **Instalação Inicial:**
    ```bash
    npm install
    ```
2.  **Sincronização de Banco (Schema):**
    ```bash
    npx prisma db push
    npx prisma generate
    ```
3.  **Desenvolvimento:**
    ```bash
    npm run dev
    ```
4.  **Produção:**
    ```bash
    npm run build
    npm run start
    ```

---

### 👤 Autor & Desenvolvedor

Este projeto foi concebido, arquitetado e desenvolvido integralmente por **Christyan Silva**. Cada linha de código, desde a infraestrutura de banco de dados até as animações 3D de alta performance, reflete o compromisso com a excelência técnica e a soberania digital.

---

### 📜 Licença & Propriedade
© 2026 **TIVOR Financial Architecture**.
Propriedade Intelectual Privada. Todos os direitos reservados.
Desenvolvido com excelência por [**Christyan Silva**](https://github.com/Christyan95).

