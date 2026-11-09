# Snesar.MD — Global Engineering & Technology Solutions

<div align="center">

![Snesar.MD Banner](https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1600&q=80&auto=format&fit=crop)

### Engineering Tomorrow. Transforming Industries Today.

[![React](https://img.shields.io/badge/React-19.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-7.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-14.9-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen?style=for-the-badge)](https://github.com/)

[**Live Demo**](#deployment) • [**Architecture**](#architecture--project-structure) • [**Industry Verticals**](#core-industry-verticals) • [**Getting Started**](#getting-started) • [**Design System**](#design-system--tokens)

</div>

---

## 📌 Executive Overview

**Snesar.MD** is an enterprise-grade corporate platform for a global engineering and technology solutions provider. Built with modern web standards, it delivers a high-impact, editorial visual experience with responsive performance, interactive architecture sandboxes, and domain-specific engineering presentations across five global industrial sectors:

- 🏭 **Industrial Automation** — Smart manufacturing, PLC/SCADA, robotics, IIoT, and digital twin state synchronization.
- 🩺 **Medical Technology** — AI-assisted radiological imaging, DICOM/PACS ingestion, and IEC 62304 / ISO 13485 compliant software.
- ⚡ **Automotive Engineering** — High-voltage EV battery management, AUTOSAR Adaptive SOA, and ISO 26262 ASIL-D active safety.
- 🏃 **Sports Engineering** — Real-time markerless biomechanics tracking, 200 Hz IMU sensor fusion, and sideline tactical analytics.
- 🤖 **RPA & Intelligent Automation** — Straight-through enterprise invoice reconciliation, Veeva Vault CTMS sync, and SAP S/4HANA workflows.

---

## ✨ Key Platform Features

### 1. Global Navigation & Dynamic Mega Menus
- **Sticky Header**: Compact scroll transition with frosted glass backdrop blur (`backdrop-blur-md`).
- **Industries Mega Menu**: Instant access to all 5 core engineering domains with capability tags and case study shortcuts.
- **Solutions Mega Menu**: Architecture blueprints with feature highlights and custom project inquiries.
- **Mobile Drawer**: Responsive accordion navigation with zero layout shift.

### 2. Industry-Specific Interactive Views
Each vertical has a custom-built architectural view and interactive telemetry sandbox:
- **Industrial Automation View**: Interactive 4-stage assembly line telemetry inspector (Pick & Place, Vision Inspection, Precision Laser Weld, AGV Dispatch) with live SCADA controller simulator.
- **Medical Technology View**: High-resolution radiological PACS viewer (Brain MRI, Chest CT, Cardiac Angiography) with multi-plane annotations, DICOM tag metadata inspector, and clinical verification toggle.
- **Automotive Engineering View**: Dynamic powertrain & ADAS subsystem simulator (800V SiC Inverter, 360° Sensor Fusion, AUTOSAR Gateway) with simulated live telemetry streams.
- **Sports Engineering View**: Interactive 33-point markerless motion capture sandbox with live kinematics graphs (knee flexion velocity, ground reaction force, limb symmetry).
- **RPA & Intelligent Automation View**: Live enterprise workflow engine demonstrating SAP S/4HANA 3-way match, clinical trial consent verification, and multi-modal logistics document extraction.

### 3. Engineering Solutions & Case Studies
- **Categorized Search & Filter**: Real-time keyword search and category filtering across core solutions and technical case studies.
- **Deep Technical Modals**: Multi-tab solution dossiers covering System Architecture, Key Features, Technology Stack, and Verified Engineering Deliverables.
- **Detailed Case Study Pages**: Comprehensive challenge-approach-solution-outcome breakdowns with domain-specific metrics.

### 4. Interactive Careers & Talent Acquisition
- **Role Filtering**: Search openings by department, employment type, or global location.
- **Live Application Dossier**: Step-by-step application modal with resume upload simulator, GitHub/portfolio link validation, and instant confirmation receipts.

### 5. Technical Intake & Contact Desk
- **Enterprise Form Validation**: Strict field validation for corporate email, phone format, and technical scope depth.
- **Confidentiality & Compliance**: Clear governance disclaimers under standard mutual NDA terms and ISO 27001 data protection principles.
- **Simulated Secure Transmission**: Real-time submission state with animated progress telemetry.

---

## 🏗️ Technology Stack

| Layer | Technology | Purpose |
|:---|:---|:---|
| **Core Framework** | [React 19.3](https://react.dev/) | Component architecture, lazy loading, state management |
| **Language** | [TypeScript 7.0](https://www.typescriptlang.org/) | Strict type safety, interface definitions, refactoring safety |
| **Build & Bundler** | [Vite 8.3](https://vite.dev/) + Rolldown | Ultra-fast HMR, ESM bundling, automated chunk splitting |
| **Styling & Design** | [Tailwind CSS v4.3](https://tailwindcss.com/) | Modern utility-first CSS engine with `@tailwindcss/vite` |
| **Motion & Animation** | [Framer Motion 14.9](https://www.framer.com/motion/) | Orchestrated page transitions, spring physics, layout animations |
| **Icons** | [Lucide React](https://lucide.dev/) | Consistent, scalable enterprise vector iconography |
| **Routing** | [React Router v7](https://reactrouter.com/) | Client-side routing, route-based code splitting, scroll restoration |

---

## 📁 Architecture & Project Structure

```text
snesar-md/
├── public/                       # Static public assets
│   ├── _redirects                # Netlify SPA redirect rules
│   ├── favicon.svg               # Vector brand icon
│   ├── og-image.svg              # Open Graph social preview
│   ├── robots.txt                # Search engine crawler configuration
│   └── sitemap.xml               # Complete XML sitemap for SEO
├── src/
│   ├── components/
│   │   ├── common/               # Reusable UI primitives (SectionHeading, Logo, etc.)
│   │   ├── home/                 # Homepage sections (Hero, Verticals, Innovation, etc.)
│   │   ├── industries/           # 5 Specialized Industry architectural views
│   │   │   ├── IndustrialAutomationView.tsx
│   │   │   ├── MedicalTechnologyView.tsx
│   │   │   ├── AutomotiveEngineeringView.tsx
│   │   │   ├── SportsEngineeringView.tsx
│   │   │   └── RPAIntelligentAutomationView.tsx
│   │   └── layout/               # Global shell (Navbar, Footer, MegaMenus, Layout)
│   ├── data/                     # Typed data models & enterprise content
│   │   ├── capabilities.ts       # Engineering capabilities & technologies
│   │   ├── caseStudies.ts        # Comprehensive project case study dossiers
│   │   └── solutions.ts          # Featured engineering solution architectures
│   ├── pages/                    # Route page views (code-split via React.lazy)
│   │   ├── Home.tsx              # Corporate landing page
│   │   ├── About.tsx             # Company overview, executive leadership, values
│   │   ├── Solutions.tsx         # Solutions explorer with dynamic search & modals
│   │   ├── IndustryDetail.tsx    # Single/multi-industry detail router
│   │   ├── Innovation.tsx        # Active R&D initiatives & lab benchmarks
│   │   ├── CaseStudies.tsx       # Case study catalog & filter
│   │   ├── CaseStudyDetail.tsx   # Individual case study deep-dive
│   │   ├── Careers.tsx           # Departmental job board & application flow
│   │   ├── Contact.tsx           # Technical intake dossier & regional desks
│   │   └── NotFound.tsx          # 404 recovery page
│   ├── App.tsx                   # Route definitions, suspense boundaries, scroll top
│   ├── index.css                 # Tailwind CSS v4 design tokens, fonts, utilities
│   └── main.tsx                  # React DOM mount entry
├── netlify.toml                  # Netlify deployment configuration
├── vercel.json                   # Vercel deployment & cache header configuration
├── vite.config.ts                # Vite plugins, path aliases (@/), manual code chunking
├── tsconfig.json                 # TypeScript strict compiler configuration
└── package.json                  # Dependencies & scripts
```

---

## 🎨 Design System & Tokens

The platform follows a clean corporate design system engineered for high technical credibility:

| Token Name | Hex Code | Tailwind Class | Application |
|:---|:---|:---|:---|
| **Deep Navy** | `#071B33` | `bg-navy`, `text-navy` | Primary brand background, editorial titles, dark accents |
| **Electric Blue** | `#1264E8` | `bg-electric`, `text-electric` | Primary call-to-actions, active links, glow highlights |
| **Cyan Accent** | `#16C6D9` | `bg-cyan`, `text-cyan` | Telemetry indicators, metrics, data highlights, pills |
| **Section Slate** | `#F3F6FA` | `bg-section` | Alternating section backgrounds, technical cards |
| **Crisp White** | `#FFFFFF` | `bg-white` | Primary content canvas, elevated cards |

### Typography
- **Headings & Display**: `Syne`, system font fallback (bold, editorial, modern)
- **Body Text**: `Inter`, system font fallback (high-readability, neutral)
- **Telemetry & Badges**: `JetBrains Mono` / `monospace` (precision engineering registers)

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: v18.0.0 or higher (v20+ LTS recommended)
- **Package Manager**: `npm` (v9+), `pnpm`, or `yarn`

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-org/snesar-md.git
   cd snesar-md
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```
   The production-ready artifacts will be emitted to `/dist`.

5. **Preview the production build locally**:
   ```bash
   npm run preview
   ```

---

## ⚡ Performance & Production Optimization

- **Route-Level Code Splitting**: All pages are dynamically imported via `React.lazy` and wrapped in `<Suspense>`, keeping the initial bundle size under 88 kB.
- **Vendor Chunk Isolation**: Vite's `manualChunks` splits `vendor-react` and `vendor-motion` to maximize browser cache hit ratios.
- **Optimized Asset Delivery**:
  - Image assets loaded via Unsplash CDN with automated WebP format negotiation (`auto=format&fit=crop`).
  - Critical hero image pre-configured with `fetchPriority="high"` and `loading="eager"`.
  - Non-critical imagery lazy-loaded below the fold.
- **SEO & Social Sharing Ready**:
  - Dynamic `<title>` management per page route.
  - Complete Open Graph (`og:title`, `og:description`, `og:image`) and Twitter Card tags in `index.html`.
  - Clean XML sitemap (`/sitemap.xml`) and search crawler directives (`/robots.txt`).

---

## 🌐 Deployment

The codebase is pre-configured for automated zero-configuration deployment to all modern hosting platforms:

### Deploy to Vercel
Configuration file: [`vercel.json`](./vercel.json)
```bash
npx vercel
```
Includes single-page application rewrites and immutable HTTP cache headers for static assets (`/assets/*`).

### Deploy to Netlify
Configuration files: [`netlify.toml`](./netlify.toml) & [`public/_redirects`](./public/_redirects)
```bash
npx netlify deploy --prod
```
SPA redirects (`/* /index.html 200`) and security headers (`X-Frame-Options`, `X-Content-Type-Options`) are automatically applied.

### Docker / NGINX
To deploy via an NGINX container:
```nginx
server {
    listen 80;
    server_name snesar.md;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /assets/ {
        expires 1y;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }
}
```

---

## 🔒 Governance & Ethical Engineering Standards

All technical solution blueprints, simulators, and case studies featured on the Snesar.MD website illustrate architectural design patterns and delivery methodologies. Client information and intellectual property are safeguarded in accordance with international standard mutual NDA terms, ISO 27001 data governance, and strict confidentiality protocols.

---

## 📄 License

This project is proprietary software developed for **Snesar.MD**. All rights reserved.

<div align="center">

**[Snesar.MD](https://snesar.md)** &bull; Global Engineering &amp; Technology Solutions

</div>

