# ✦ Fernanda Jara Meza — Portfolio

Personal portfolio website for **Fernanda Jara Meza**, graphic designer and illustrator behind the brand **Punto y Raya**.

## 🖼️ Preview

The site showcases Fernanda's art, illustration, and graphic design work across multiple project pages including Punto y Raya, La Terminal, El Vino y El Tiempo, and more.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **Astro** | Static site generator with file-based routing |
| **React** | Interactive components (islands architecture) |
| **Tailwind CSS** | Utility-first styling |
| **Framer Motion** | Animations (hover effects, scroll reveals) |
| **Vercel** | Deployment with custom domain |

## 🚀 Getting Started

### Prerequisites

- Node.js v24+

### Installation

```bash
# Clone the repo
git clone https://github.com/MirandaCavalie/designer-web.git
cd designer-web

# Install dependencies
npm install

# Start dev server
npm run dev
```

The site will be available at `http://localhost:4321`

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
├── public/
│   └── images/              # Public static images
├── src/
│   ├── assets/
│   │   ├── images/          # Main images (hero, grid cards)
│   │   ├── punto-y-raya/    # Punto y Raya project assets
│   │   ├── cuadros/         # Cuadros project assets
│   │   ├── la-terminal/     # La Terminal project assets
│   │   └── el-vino-y-el-tiempo/  # El Vino y El Tiempo assets
│   ├── components/          # Astro & React components
│   ├── layouts/             # Page layouts
│   ├── pages/
│   │   ├── index.astro      # Homepage
│   │   └── projects/        # Detail pages for each project
│   └── styles/              # Global CSS
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## 📄 Pages

- **Homepage** — Hero section + Art grid with project cards
- **/projects/punto-y-raya** — Illustration brand & merch
- **/projects/cuadros** — Painting series "La Soledad de Mi Casa"
- **/projects/la-terminal** — Album cover art for Jaze
- **/projects/el-vino-y-el-tiempo** — Cover art & music video design

## ✨ Design Highlights

- **Typography:** Helvetica Neue with -0.02em letter-spacing
- **Navbar:** Glassmorphism with blur + fade-out mask, rotating star logo
- **Hero:** Floating polaroid animation with mix-blend-mode collage
- **Art Grid:** Hover scale/translate effects on project cards
- **Detail pages:** Full-bleed images with scroll-reveal animations

## 👩‍🎨 Artist

**Fernanda Jara Meza** — Graphic Designer & Illustrator

---

Built with Astro 🚀
