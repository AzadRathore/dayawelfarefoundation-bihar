# Daya Welfare Foundation — Admission Counseling Website

A responsive 6-page website (Home, About, Domestic Studies, Foreign Studies, Services, Contact) built with **Vite + React + TypeScript + Tailwind CSS + shadcn/ui**.

---

## 📦 Tech Stack

- **Vite 5** (build tool & dev server)
- **React 18** + **TypeScript 5**
- **Tailwind CSS v3** + **shadcn/ui** components
- **React Router** for page navigation
- **Lucide React** icons
- **Express** + **tsx watch** for the backend API and form submission server

---

## ✅ Prerequisites

Before you begin, install the following on your machine:

1. **Node.js (v18 or higher)**
   - Verify: `node -v`
2. **npm** (comes with Node.js)
   - Verify: `npm -v`
3. **Git** (optional, for cloning)
4. A code editor like **VS Code**

---

## 🚀 Local Setup — Step by Step

### Step 1: Clone or extract the project

If you have a Git repository:

```bash
git clone <your-repo-url>
cd daya-welfare-foundation
```

If you downloaded a ZIP archive, extract it and open the project folder.

### Step 2: Install dependencies

Run this inside the project folder:

```bash
npm install
```

> This installs the frontend and backend dependencies into `node_modules/`.

### Step 3: Start the development environment

```bash
npm run dev
```

This runs both:

- `vite` for the React frontend
- `tsx watch server.ts` for the backend server

### Step 4: Open the site in your browser

Visit 👉 **http://localhost:5173**

The app supports **Hot Module Reload** — any code change will auto-refresh the page.

---

## 🛠 Available Scripts

| Command            | What it does                                                        |
| ------------------ | ------------------------------------------------------------------- |
| `npm run dev`      | Start the local dev environment for frontend and backend            |
| `npm run server`   | Start only the backend server with `tsx watch server.ts`            |
| `npm run build`    | Build a production-ready frontend bundle in `dist/`                 |
| `npm run build:dev`| Build the frontend in development mode                              |
| `npm run preview`  | Preview the production build locally                                |
| `npm run lint`     | Run ESLint on the codebase                                          |
| `npm run test`     | Run unit tests with Vitest                                          |

---

## 📁 Project Structure

```
├── public/              # Static assets (favicon, robots.txt)
├── src/
│   ├── assets/          # Images and static media
│   ├── components/      # Reusable UI components and layout
│   │   └── ui/          # shadcn/ui components
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   ├── pages/           # Route pages (Home, About, Domestic, Foreign, Services, Contact)
│   ├── App.tsx          # App routes and layout
│   └── main.tsx         # React entry point
├── server.ts            # Backend server entry point
├── index.html           # HTML template (SEO meta tags)
├── tailwind.config.ts   # Tailwind configuration
├── vite.config.ts       # Vite configuration
└── package.json         # Dependencies and scripts
```

---

## 🎨 Customization

- **Colors / Theme:** Edit design tokens in `src/index.css` and `tailwind.config.ts`.
- **Page content:** Update files in `src/pages/`.
- **Navigation links:** Update `src/components/Navbar.tsx` and `src/components/Footer.tsx`.
- **SEO meta tags:** Edit the `<head>` section in `index.html`.
- **Images:** Replace or update files in `src/assets/`.

---

## 🏗 Build for Production

```bash
npm run build
```

The optimized frontend output will be inside the `dist/` folder. Deploy this folder to any static host (Netlify, Vercel, GitHub Pages, Hostinger, cPanel, etc.).

To test the production build locally:

```bash
npm run preview
```

---

## 🐛 Troubleshooting

- **Port already in use** → Stop the other process or change the port in `vite.config.ts`.
- **`npm` not found** → Install Node.js from https://nodejs.org/.
- **Install errors** → Delete `node_modules` and `package-lock.json`, then run `npm install` again.
- **Blank page after build** → Serve the `dist/` folder through a web server rather than opening `index.html` directly.

---

## 📞 Support

For code-related issues, review the source files or contact the project maintainer.
For Daya Welfare Foundation services, visit the website's **Contact** page.
