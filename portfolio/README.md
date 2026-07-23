# Nishandhinee P — Portfolio

A premium, recruiter-focused personal portfolio built for software engineering / IT campus placements.
Design language: a "circuit trace / signal" identity — bridging the ECE background (embedded systems,
sensors, signal processing) with the software work (React, APIs, AI integration) shown in the projects.

**Design system:** ink/paper backgrounds, brass + signal-green accents, Space Grotesk (display) +
Inter (body) + IBM Plex Mono (data/labels), an animated oscilloscope-waveform signature visual in the hero.

## Tech Stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS v4 (CSS-first config via `@theme`, no `tailwind.config.js` needed)
- Framer Motion (animations, scroll reveals, page-load sequence)
- Lucide React (icons) + two custom brand icons (GitHub/LinkedIn — Lucide v1 dropped brand marks)
- React Router (single page + a proper 404 route)

## Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg          # branded circuit-trace favicon
│   ├── resume.pdf           # downloadable resume (swap this file to update)
│   └── images/
│       └── profile.png      # profile photo (extracted from resume)
├── src/
│   ├── components/          # reusable UI: Nav, Footer, Reveal, SectionHeading,
│   │                         # ScrollProgress, FloatingHireMe, LoadingScreen,
│   │                         # CustomCursor, Toast, SignalVisual (signature), icons
│   ├── sections/             # one file per page section (Hero, About, Education,
│   │                         # Skills, Projects, Experience, Certifications,
│   │                         # Achievements, TechTimeline, Contact)
│   ├── hooks/                 # useTheme, useScrollProgress, useCountUp
│   ├── data/
│   │   └── profile.ts         # ALL site content lives here — edit this file only
│   │                          # to update text, projects, skills, etc.
│   ├── pages/
│   │   └── NotFound.tsx        # 404 page
│   ├── App.tsx                 # assembles all sections
│   ├── main.tsx                 # router entry
│   └── index.css                 # design tokens (@theme), global styles
├── index.html                     # SEO meta, Open Graph, structured data
└── vite.config.ts
```

## Updating Content

Everything text-based (name, summary, education, skills, projects, experience,
certifications, research, timeline) lives in **`src/data/profile.ts`**. Edit that
one file and every section updates automatically — no need to touch components.

To swap the photo or resume file, replace `public/images/profile.png` or
`public/resume.pdf` directly (keep the same filenames), or update the references
in `src/data/profile.ts` and `src/sections/Hero.tsx` / `src/components/Nav.tsx`.

## Run Locally

Requires Node.js 18+.

```bash
npm install
npm run dev
```

Open the URL Vite prints (default `http://localhost:5173`).

## Build for Production

```bash
npm run build
```

Output goes to `dist/`. Preview the production build locally with:

```bash
npm run preview
```

## Deployment

### Vercel (recommended — zero config)

1. Push this project to a GitHub repository.
2. Go to vercel.com/new and import the repo.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Deploy. Vercel gives you a live URL and redeploys on every push.

Or via CLI:
```bash
npm install -g vercel
vercel
```



## Features

- Responsive layout (mobile / tablet / desktop)
- Dark mode / light mode toggle (persisted to localStorage, respects OS preference)
- Sticky nav with active-section highlighting and smooth scrolling
- Scroll progress bar
- Scroll-reveal animations throughout (respects `prefers-reduced-motion`)
- Animated stat counters, animated skill bars
- Filterable project grid
- Typing animation for role titles in the hero
- Custom cursor on desktop pointers
- Floating "Hire Me" button
- Toast notifications (copy email, contact form)
- Loading screen on first paint
- Professional 404 page
- SEO: meta description, Open Graph, Twitter card, JSON-LD structured data, favicon
- Accessible: semantic landmarks, visible focus states, ARIA labels on icon buttons,
  keyboard-operable nav and form

## Notes

- The contact form builds a `mailto:` link on submit (no backend) — standard for a
  static portfolio. To wire it to a real backend/email service later, replace the
  `handleSubmit` function in `src/sections/Contact.tsx`.
- Skill "levels" in `src/data/profile.ts` are self-assessed relative indicators, not
  certification claims — adjust freely.
