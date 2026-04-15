<div align="center">

# TIVOR — High Performance Financial Architecture
**Arquitetura Financeira e Governança Extraordinária para o Agronegócio**

[![Next.js 16](https://img.shields.io/badge/Next.js-16.1.6-black?logo=next.js&logoColor=white)](https://nextjs.org/)
[![Prisma 7](https://img.shields.io/badge/Prisma-7.5.0-5a67d8?logo=prisma&logoColor=white)](https://www.prisma.io/)
[![PostgreSQL 16](https://img.shields.io/badge/PostgreSQL-16-336791?logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![OAuth 2.0](https://img.shields.io/badge/OAuth-2.0-eb5424?logo=auth0&logoColor=white)](https://oauth.net/2/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

"A excelência na gestão financeira é o alicerce da soberania no agronegócio."

</div>

---

## 📋 Índice

- [💎 Visão Estratégica](#-visão-estratégica)
- [🏛️ Arquitetura de Soberania Digital](#%EF%B8%8F-arquitetura-de-soberania-digital)
- [🚀 Stack Tecnológica de Elite](#-stack-tecnológica-de-elite)
- [📡 Ecossistema & Hub Tecnológico Jee](#-ecossistema--hub-tecnológico-jee)
- [🔒 Segurança & Governança Forense](#-segurança--governança-forense)
- [🏗 Estrutura Full-Stack (Flow)](#-estrutura-full-stack-flow)
- [📊 Engenharia de Dados (SITE_CONT)](#-engenharia-de-dados-site_cont)
- [⚙️ Configuração de Ambiente](#-configuração-de-ambiente)
- [🛠 Instalação & Deployment](#-instalação--deployment)

---

## 💎 Visão Estratégica

A **TIVOR** é uma corporação de vanguarda que redefine a **Arquitetura Financeira** no setor agrícola. Desenvolvida integralmente por **Christyan Silva**, esta plataforma não é apenas um site institucional, mas um terminal de autoridade digital que projeta confiança, precisão e modernidade. 

O sistema foi concebido para atender às mais rigorosas demandas de governança, integrando design premium com uma infraestrutura backend impenetrável e independente.

---

## 🏛️ Arquitetura de Soberania Digital

Diferente de soluções convencionais baseadas em plataformas de terceiros (SaaS), a TIVOR adota o modelo de **Soberania Absoluta**:

*   **Comunicação Direta Cloud:** Sistema de e-mail integrado nativamente à Microsoft Graph API, eliminando custos e riscos de privacidade associados a middlewares como Resend ou SendGrid.
*   **Persistência Soberana:** Todo dado capturado é armazenado em um cluster PostgreSQL proprietário, permitindo conformidade total com a LGPD e políticas internas de segurança.
*   **Zero Resíduos Tecnológicos:** A aplicação é autocontida, garantindo que o fluxo de informação "Lead → Database → Notificação" ocorra em um ambiente controlado e criptografado.

---

## 🚀 Stack Tecnológica de Elite

### Frontend Master
- **Next.js 16 (App Router):** Utilização de componentes de servidor e cliente de última geração para SEO e performance.
- **Framer Motion 12:** Motor de animações avançado para interações fluidas e feedback visual de luxo.
- **Three.js & React Three Fiber:** Renderização 3D de alta fidelidade para representação simbólica de robustez financeira.
- **Tailwind CSS + Design System Custom:** Estilização atômica rigorosa, garantindo consistência visual em todos os dispositivos.

### Backend & Core Service
- **Prisma ORM 7:** Manipulação de dados com segurança de tipos (Type-Safety) absoluta.
- **PostgreSQL 16:** Banco de dados de alta disponibilidade com indexação otimizada.
- **Microsoft Graph API (OAuth 2.0):** Autenticação baseada em tokens para envio seguro de e-mails corporativos.
- **Next.js Proxy Gateway:** Sistema centralizado para roteamento, segurança e internacionalização (I18n).

---

## 📡 Ecossistema & Hub Tecnológico Jee

A plataforma serve como portal de entrada para o **Hub Tecnológico Jee**, um conjunto de soluções proprietárias de alta complexidade:

-   **JeeRisk:** Monitoramento de exposição de crédito e riscos financeiros em tempo real.
-   **JeeGarant:** Gestão documental e jurídica de garantias (CPRs, Penhores, Avais).
-   **JeeBI:** Inteligência de negócios com dashboards executivos de alta performance.
-   **JeeCount:** Geração ágil de demonstrações financeiras com precisão contábil total.
-   **JeeCob:** Recuperação de crédito automatizada com estratificação inteligente.

---

## 🔒 Segurança & Governança Forense

Segurança em nível enterprise implementada em múltiplas camadas:

-   **Sanitização Zod:** Filtro de entrada que bloqueia injeções e sanitiza dados (trim() e length limits).
-   **Anti-Spam (Dual Honeypot):** Sistema de armadilha para bots invisível, prevenindo ataques de submissão em massa no servidor.
-   **Trilha Forense:** Captura automática de metadados de acesso (IP Real, User-Agent) de cada interação, permitindo auditorias técnicas detalhadas.
-   **Email Escape:** Tratamento rigoroso de caracteres especiais no corpo dos e-mails para prevenir injeções de script (Cross-Site Scripting via Email).

---

## 🏗 Estrutura Full-Stack (Flow)

O fluxo de dados da TIVOR é linear, atômico e resiliente:

1.  **Captura:** Interface reativa coleta dados via formulário sanitizado.
2.  **Validação:** Server Actions executam validação tipada e filtros de spam.
3.  **Persistência:** O lead é salvo no PostgreSQL (`SITE_CONT`) com carimbo de tempo centralizado.
4.  **Notificação:** Disparo assíncrono via OAuth 2.0 para os e-mails corporativos dos gestores.

---

## 📊 Engenharia de Dados (SITE_CONT)

A tabela principal de governança segue padrões de alta disponibilidade e rastreabilidade:

| Coluna | Descrição Técnica | Função de Governança |
|---|---|---|
| `UUID_CONT` | Primary Key (UUID v4) | Identificador imutável do evento de contato. |
| `MAIL_CONT` | Indexed String | E-mail do solicitante para BI e CRM. |
| `MENS_CONT` | Text | Conteúdo íntegro da mensagem capturada. |
| `IP_CONT` | String | Endereço IP para auditoria de rede e segurança. |
| `CREA_CONT` | Timestamp | Data e hora automática de entrada no sistema. |

---

## ⚙️ Configuração de Ambiente

A orquestração do sistema depende de um arquivo `.env` rigorosamente configurado:

```env
# Database Infrastructure
DATABASE_URL="postgresql://user:pass@host:port/dbname?sslmode=require"

# Microsoft Azure (OAuth 2.0)
AZURE_TENANT_ID="ID_DO_TENANT_AZURE"
AZURE_CLIENT_ID="ID_DA_APP_AZURE"
AZURE_CLIENT_SECRET="SECRETO_CLIENT_SECRET"

# Notification Routes
AZURE_SENDER_USER_EMAIL="workflow@seu-dominio.com.br"
SITE_CONTACT_EMAIL="atendimento@tivor.agr.br"
```

---

## 🛠 Instalação & Deployment

### Ambiente de Desenvolvimento
```bash
npm install
npx prisma generate
npm run dev
```

### Build de Produção
```bash
npm run build
npm run start
```

---

### 👤 Autor & Arquiteto
**Christyan Silva**

---

## 📄 Licença

Projeto corporativo privado — © 2026 **Jee Invest Br**. Todos os direitos reservados.
