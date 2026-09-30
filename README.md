# Restoration Growth Engine | SJ Innovation

A high-converting, fully functional web application designed exclusively for Water, Fire, Mold & Storm Restoration Contractors.

Recreated and upgraded from the sales prototype into a modern, production-grade React + TypeScript + Tailwind application.

---

## 🚀 Key Features & Functionality

1. **24/7 Emergency Intake & AI Receptionist Workflow**
   - 5-step visual breakdown of emergency caller triage, property data collection, and sub-5s text follow-up.
   - **Interactive Live AI Dispatcher Simulator**: Allows prospective contractors to test and experience the real-time AI triage flow directly on the page.

2. **Full Lead Capture & CRM Pipeline (GHL Ready)**
   - Pre-populated package interest when clicking pricing tiers.
   - Validated emergency intake form with service selection and core challenge logging.
   - Dual-persistence engine:
     - Automatically POSTs to `VITE_GHL_WEBHOOK_URL` (GoHighLevel, Zapier, Make, or custom API).
     - Persists locally in `localStorage` to ensure zero lead loss during testing or offline demonstrations.
   - Built-in CSV Export tool in footer (`Export Captured Leads`).

3. **Standalone Interactive Booking Calendar**
   - 15-Minute Strategy Call booking modal.
   - Dynamically generates the next 10 business days (skipping weekends).
   - Morning & Afternoon EST time slot selector.
   - Instant confirmation screen with:
     - 1-Click **"Add to Google Calendar"** link.
     - Direct **`.ICS` file download** for Microsoft Outlook and Apple Calendar.

4. **Transparent Growth Packages**
   - **SEO Starter ($199/mo)**: Google Maps & Local 3-Pack ranking.
   - **AI Growth ($399/mo)**: Most popular — 24/7 AI Receptionist, Missed-Call Text Back, GHL CRM.
   - **Website + Growth Launch ($999 One-Time)**: Custom mobile-first restoration redesign + 3 months SEO support.

5. **Modern Tech Stack & SEO Optimization**
   - Built with React 18, Vite, TypeScript, and Tailwind CSS.
   - Inter typography & custom dark Navy/Gold/Teal aesthetic.
   - No external Tailwind CDN; optimized CSS output for fast Core Web Vitals (LCP < 1s).
   - Structured for SEO & AEO (AI Engine Optimization for Perplexity, ChatGPT, and Google AI Overviews).

---

## 🛠️ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Optional Webhook (GoHighLevel / Zapier)
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```
Set your GoHighLevel inbound webhook URL:
```env
VITE_GHL_WEBHOOK_URL=https://services.leadconnectorhq.com/hooks/...
```

### 3. Start Development Server
```bash
npm run dev
```

### 4. Build for Production
```bash
npm run build
npm run preview
```

---

## 📂 Project Structure

```
restoration-growth-engine/
├── public/                 # Favicons and public assets
├── src/
│   ├── components/
│   │   ├── Navbar.tsx                # Fixed header & responsive mobile drawer
│   │   ├── Hero.tsx                  # Hero section with value chips & CTAs
│   │   ├── ConversionGap.tsx         # The 4 critical failure points for restoration leads
│   │   ├── Packages.tsx              # $199, $399, $999 transparent plans
│   │   ├── AiReceptionistWorkflow.tsx # 5-step emergency intake process
│   │   ├── InteractiveDemoModal.tsx  # Live AI caller simulator widget
│   │   ├── SeoVsAeo.tsx              # Comparison of Local Maps SEO vs AI Search
│   │   ├── WebsiteRedesign.tsx       # Before vs After conversion showcase
│   │   ├── ReviewSection.tsx         # Free digital audit lead capture form
│   │   ├── PartnershipStats.tsx      # SJ Innovation 20+ years credentials
│   │   ├── FaqSection.tsx            # Interactive accordion FAQ
│   │   ├── FinalCta.tsx              # Closing conversion banner
│   │   ├── Footer.tsx                # Footer with CSV export tool
│   │   ├── ReviewModal.tsx           # Quick audit modal
│   │   ├── BookingModal.tsx          # Interactive calendar & slot booking modal
│   │   └── NotificationToast.tsx     # Animated feedback notifications
│   ├── utils/
│   │   └── leadStorage.ts            # LocalStorage & Webhook dispatch pipeline
│   ├── types.ts                      # Shared TypeScript data models
│   ├── App.tsx                       # Master application orchestration
│   ├── main.tsx                      # Vite React entrypoint
│   └── index.css                     # Tailwind directives & glassmorphism tokens
├── tailwind.config.js
└── vite.config.ts
```

---

© 2026 SJ Innovation LLC. All rights reserved.
