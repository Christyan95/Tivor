<div align="center">

# TIVOR — Financial Architecture Landing Page

**Arquitetura Financeira de Alta Performance para o Agronegócio**

[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.3-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-0.183-000000?logo=three.js)](https://threejs.org/)
[![License](https://img.shields.io/badge/License-Private-red)]()

</div>

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Screenshots](#-screenshots)
- [Tecnologias](#-tecnologias)
- [Arquitetura](#-arquitetura)
- [Estrutura de Arquivos](#-estrutura-de-arquivos)
- [Internacionalização (i18n)](#-internacionalização-i18n)
- [Paleta de Cores](#-paleta-de-cores)
- [Performance](#-performance)
- [Instalação](#-instalação)
- [Deploy na Vercel](#-deploy-na-vercel)
- [Scripts Disponíveis](#-scripts-disponíveis)
- [Componentes](#-componentes)
- [SEO](#-seo)
- [Licença](#-licença)

---

## 🎯 Sobre o Projeto

TIVOR é uma **corporação especializada em Arquitetura Financeira e Governança para o Agronegócio**. Esta landing page institucional foi projetada para transmitir autoridade e excelência, apresentando a empresa como referência em gestão financeira para operações agrícolas de alta complexidade.

### Destaques

- 🌐 **Multilíngue** — Português (pt-BR) e English (en-US) com troca dinâmica
- 🎨 **Design Premium** — Light theme com paleta TIVOR customizada
- 🖥️ **Visualizações 3D** — Two.js/Three.js com lazy loading para performance
- 📱 **Responsive** — Mobile-first com breakpoints sm/md/lg/xl
- ⚡ **Performance** — Imagens WebP, lazy load 3D, font optimization
- ♿ **Acessível** — Aria-labels, semantic HTML, keyboard navigation
- 🔍 **SEO Dinâmico** — Meta tags e OpenGraph por idioma

---

## 🛠 Tecnologias

### Core
| Tecnologia | Versão | Uso |
|---|---|---|
| [Next.js](https://nextjs.org/) | 16.1.6 | Framework React com SSR, App Router e otimizações |
| [React](https://react.dev/) | 19.2.3 | Biblioteca de componentes UI |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | Tipagem estática e segurança |

### Styling e UI
| Tecnologia | Uso |
|---|---|
| [Tailwind CSS](https://tailwindcss.com/) 3.4 | Framework CSS utility-first com paleta customizada |
| [Lucide React](https://lucide.dev/) | Biblioteca de ícones (60+ ícones usados) |
| [Geist Font](https://vercel.com/font) | Tipografia primária via `next/font` |

### Animação e 3D
| Tecnologia | Uso |
|---|---|
| [Framer Motion](https://motion.dev/) | Animações de entrada, scroll e micro-interações |
| [Three.js](https://threejs.org/) | Renderização 3D WebGL |
| [React Three Fiber](https://r3f.docs.pmnd.rs/) | React renderer para Three.js |
| [@react-three/drei](https://drei.docs.pmnd.rs/) | Helpers para R3F |
| [Lenis](https://lenis.darkroom.engineering/) | Smooth scroll premium |

### Dev Tools
| Tecnologia | Uso |
|---|---|
| [Sharp](https://sharp.pixelplumbing.com/) | Otimização de imagens (PNG → WebP) |
| [ESLint](https://eslint.org/) | Linting de código |
| [PostCSS](https://postcss.org/) + Autoprefixer | Processamento CSS |

---

## 🏗 Arquitetura

```
Browser Request → Next.js Middleware (locale detection)
    → /[locale]/layout.tsx (fonts, SEO metadata per locale)
        → /[locale]/page.tsx (component composition)
            → TranslationProvider (i18n context)
                → SmoothScroll (Lenis wrapper)
                    → Components (Navbar → Hero → ... → Footer)
```

### Padrões Implementados
- **Server Components** para layout e page (SSR)
- **Client Components** (`"use client"`) para interatividade
- **Dynamic Imports** (`next/dynamic`) para 3D com `ssr: false`
- **Context API** para i18n (TranslationProvider)
- **Composition Pattern** — dados i18n + arrays de ícones/estilos

---

## 📂 Estrutura de Arquivos

```
📦 tivor/
├── 📂 public/
│   ├── icone.png          # Favicon original (fallback Apple)
│   ├── icone.webp         # Favicon otimizado (44KB)
│   └── logo.webp          # Logo otimizado (80KB)
│
├── 📂 src/
│   ├── 📂 app/
│   │   ├── globals.css             # CSS global + scrollbar + selection
│   │   └── 📂 [locale]/
│   │       ├── layout.tsx          # Layout com SEO dinâmico (generateMetadata)
│   │       └── page.tsx            # Composição de todas as seções
│   │
│   ├── 📂 components/
│   │   ├── Navbar.tsx              # Nav fixa + menu mobile + smooth scroll
│   │   ├── LanguageSwitcher.tsx    # Toggle PT/EN
│   │   ├── Hero.tsx                # Hero com 3D background (lazy)
│   │   ├── HeroCanvas.tsx          # Three.js Canvas isolado (dynamic)
│   │   ├── ThreeDBackground.tsx    # Partículas 3D do Hero
│   │   ├── AgroContext.tsx         # Contexto do agro + parallax cards
│   │   ├── Challenges.tsx          # Desafios do setor
│   │   ├── Opportunity.tsx         # Oportunidade + nascimento TIVOR
│   │   ├── Services.tsx            # 5 pilares de serviço
│   │   ├── Technology.tsx          # Stack tecnológica + 3D engine (lazy)
│   │   ├── TechCanvas.tsx          # Three.js Canvas isolado (dynamic)
│   │   ├── CoreEngine3D.tsx        # Modelo 3D do motor tecnológico
│   │   ├── Specialization.tsx      # Expertise + ecossistema alvo
│   │   ├── Benefits.tsx            # Aliança institucional + impacto
│   │   ├── Contact.tsx             # Formulário de contato + info cards
│   │   ├── Footer.tsx              # CTA final + powered by JEE
│   │   ├── CustomCursor.tsx        # Cursor personalizado animado
│   │   └── SmoothScroll.tsx        # Wrapper Lenis
│   │
│   ├── 📂 i18n/
│   │   ├── index.ts                # Export dos dicionários + types
│   │   ├── pt.ts                   # Dicionário Português (~200 linhas)
│   │   ├── en.ts                   # Dicionário Inglês (~200 linhas)
│   │   └── TranslationContext.tsx  # React Context para i18n
│   │
│   └── middleware.ts               # Detecção de locale + redirect
│
├── tailwind.config.js              # Paleta TIVOR customizada
├── postcss.config.js               # Tailwind + Autoprefixer
├── tsconfig.json                   # TypeScript strict mode
├── next.config.ts                  # Next.js configuration
├── package.json                    # Dependências e scripts
└── .gitignore                      # Ignora node_modules, .next, .env
```

---

## 🌐 Internacionalização (i18n)

O sistema i18n é implementado **sem dependências externas**, usando:

1. **Middleware** (`src/middleware.ts`) — detecta locale na URL e redireciona
2. **Dynamic routes** — `src/app/[locale]/` para PT e EN
3. **Context API** — `TranslationProvider` injeta o dicionário correto
4. **Hook** — `useTranslation()` em cada componente client

### Estrutura do Dicionário

```typescript
// Cada seção do site tem seu bloco de tradução
export const pt = {
    navbar: { logo, item1, item2, item3, item4, cta },
    hero: { badge, titleLine1..3, description1..3, primaryButton, secondaryButton },
    agroContext: { badge, titleLine1..2, desc1, callout1..3, stats... },
    challenges: { badge, factors[], problems[] },
    opportunity: { badge, bullets, responseTitle... },
    services: { pillars: [{ num, title, desc }] },
    technology: { tools: [{ name, desc }] },
    specialization: { specializations[], targets[] },
    benefits: { features[], impactLabels[] },
    contact: { nameLabel, emailLabel, companyLabel, messageLabel, info{} },
    footer: { badge, titleLine1..3, ctaButton, rights }
};
```

### Adicionar novo idioma

1. Criar `src/i18n/es.ts` com type `typeof pt`
2. Adicionar em `src/i18n/index.ts`
3. Adicionar `"es"` ao array `locales` em `middleware.ts`

---

## 🎨 Paleta de Cores

Definida em `tailwind.config.js`, a paleta TIVOR sobrescreve os padrões do Tailwind:

| Token | Hex | Uso |
|---|---|---|
| `emerald-500` | `#0077FF` | **Azul Elétrico** — CTAs, botões primários |
| `cyan-500` | `#00BFFF` | **Ciano Brilhante** — Hovers, destaques |
| `slate-900` | `#12181F` | **Grafite Profundo** — Textos, dark elements |
| `slate-50` | `#F8F9FA` | **Branco Gelo** — Backgrounds |
| `slate-500` | `#64748B` | **Cinza Aço** — Textos secundários |
| `slate-200` | `#E2E8F0` | **Prata Claro** — Borders, divisórias |

> **Nota:** O `emerald` do Tailwind foi remapeado para tons de azul TIVOR. Quando você vê `bg-emerald-600`, o output visual é azul TIVOR, não verde.

---

## ⚡ Performance

### Otimizações Implementadas

| Técnica | Detalhes |
|---|---|
| **Imagens WebP** | PNG → WebP com Sharp (icone: 509KB → 44KB, logo: 728KB → 80KB) |
| **Lazy Load 3D** | `next/dynamic` com `ssr: false` para Hero e Technology Canvas |
| **Font Optimization** | Geist Sans via `next/font` (auto subsetting, zero layout shift) |
| **Smooth Scroll** | Lenis com `lerp: 0.1` para fluidez |
| **Viewport Once** | Animações Framer Motion com `viewport={{ once: true }}` |
| **DPR Capping** | Three.js Canvas com `dpr={[1, 2]}` para evitar overdraw em retina |

---

## 🚀 Instalação

### Pré-requisitos
- **Node.js** ≥ 18.x
- **npm** ≥ 9.x (ou yarn/pnpm)

### Setup

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/tivor-landing.git
cd tivor-landing

# 2. Instale as dependências
npm install

# 3. Execute o servidor de desenvolvimento
npm run dev

# 4. Acesse no navegador
# http://localhost:3000
```

---

## ▲ Deploy na Vercel

### Via Dashboard

1. Acesse [vercel.com](https://vercel.com) e importe o repositório GitHub
2. A Vercel detecta automaticamente Next.js — sem configuração adicional
3. Clique **Deploy**

### Via CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy para produção
vercel --prod
```

### Variáveis de Ambiente
Nenhuma variável de ambiente é necessária para o deploy básico. O projeto é 100% estático/SSR sem APIs externas.

---

## 📜 Scripts Disponíveis

| Script | Comando | Descrição |
|---|---|---|
| `dev` | `npm run dev` | Inicia o servidor de desenvolvimento (Turbopack) |
| `build` | `npm run build` | Compila para produção |
| `start` | `npm run start` | Inicia o servidor de produção |
| `lint` | `npm run lint` | Executa o ESLint |

---

## 🧩 Componentes

### Fluxo de Seções (ordem de renderização)

```
Navbar (fixo)
  └── LanguageSwitcher
Hero (#hero)
  └── HeroCanvas (lazy) → ThreeDBackground
AgroContext (#context)
Challenges (#challenges)
Opportunity (#opportunity)
Services (#services)
Technology (#technology)
  └── TechCanvas (lazy) → CoreEngine3D
Specialization (#specialization)
Benefits (#benefits)
Contact (#contact)
Footer
```

### Padrão de Componente

Todos os componentes seguem o mesmo padrão:

```tsx
"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/i18n/TranslationContext";

export const Component = () => {
    const t = useTranslation();

    return (
        <section id="anchor" className="py-24 lg:py-32 ...">
            {/* Badge */}
            <motion.div whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                {t.section.badge}
            </motion.div>
            {/* Content */}
        </section>
    );
};

export default Component;
```

---

## 🔍 SEO

O SEO é implementado via `generateMetadata()` no layout, gerando tags dinâmicas por locale:

| Tag | PT | EN |
|---|---|---|
| `<title>` | TIVOR \| Arquitetura Financeira de Alta Performance | TIVOR \| High Performance Financial Architecture |
| `<meta description>` | A TIVOR é uma corporação especializada em... | TIVOR is a corporation specialized in... |
| `og:title` | Mesmo do title | Mesmo do title |
| `og:type` | website | website |
| Favicon | `/icone.webp` | `/icone.webp` |

### Boas Práticas Implementadas
- ✅ Um único `<h1>` por página
- ✅ Heading hierarchy (h1 → h2 → h3 → h4)
- ✅ Semantic HTML (`<section>`, `<nav>`, `<footer>`, `<main>`)
- ✅ `lang` attribute dinâmico no `<html>`
- ✅ `aria-label` em botões interativos
- ✅ Alt text nas imagens

---

## 📄 Licença

Projeto privado — © 2026 TIVOR ARCHITECTURE. Todos os direitos reservados.

Desenvolvido por **JEE**.
