# 🚀 Julius Junior — Portfolio Full Stack

Portfolio professionnel de **TCHEHOUENOU Nonvignon Julius Junior**, étudiant en Informatique de Gestion à l'IUT de l'Université de Parakou.

## ✨ Stack technique

| Outil | Version | Usage |
|-------|---------|-------|
| Next.js | 14 (App Router) | Framework React full-stack |
| TypeScript | 5 | Typage statique |
| Tailwind CSS | 3.4 | Styles utilitaires |
| Framer Motion | 11 | Animations |
| next-themes | 0.3 | Dark / Light mode |
| next-intl | 3.14 | Multilingue FR/EN |
| @emailjs/browser | 4 | Formulaire de contact |
| lucide-react | 0.379 | Icônes |
| gray-matter + remark | latest | Blog Markdown |

---

## 📁 Structure du projet

```
portfolio/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx          ← Layout avec Navbar + Footer
│   │   ├── page.tsx            ← Page d'accueil
│   │   ├── projects/page.tsx   ← Projets avec filtres
│   │   ├── blog/
│   │   │   ├── page.tsx        ← Liste des articles
│   │   │   └── [slug]/page.tsx ← Article dynamique
│   │   ├── cv/page.tsx         ← CV interactif
│   │   ├── contact/page.tsx    ← Formulaire EmailJS
│   │   └── not-found.tsx       ← Page 404
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ThemeProvider.tsx
│   │   ├── HeroSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ProjectsClient.tsx
│   │   ├── BlogListClient.tsx
│   │   ├── BlogPostClient.tsx
│   │   └── ContactClient.tsx
│   ├── layout.tsx              ← Root layout (metadata SEO)
│   └── page.tsx                ← Redirect → /fr
├── content/blog/
│   ├── fr/                     ← Articles en français (.md)
│   └── en/                     ← Articles en anglais (.md)
├── data/
│   └── projects.ts             ← Données des projets
├── lib/
│   ├── blog.ts                 ← Utilitaires Markdown
│   └── utils.ts                ← cn() helper
├── messages/
│   ├── fr.json                 ← Traductions françaises
│   └── en.json                 ← Traductions anglaises
├── public/
│   ├── images/
│   │   └── profile.jpg         ← ⚠️ AJOUTER votre photo ici
│   └── cv.pdf                  ← ⚠️ AJOUTER votre CV ici
├── styles/
│   └── globals.css
├── i18n.ts
├── middleware.ts
├── request.ts
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── .env.local.example
```

---

## ⚙️ Installation & lancement

### 1. Cloner / extraire le projet

```bash
cd portfolio
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Configurer les variables d'environnement

Copiez le fichier exemple :

```bash
cp .env.local.example .env.local
```

Puis éditez `.env.local` avec vos clés EmailJS :

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=votre_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=votre_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=votre_public_key
```

> 💡 **Comment obtenir vos clés EmailJS** :
> 1. Créez un compte sur [emailjs.com](https://www.emailjs.com)
> 2. Ajoutez un service (Gmail, Outlook…)
> 3. Créez un template avec les variables : `{{from_name}}`, `{{from_email}}`, `{{message}}`
> 4. Copiez votre Service ID, Template ID et Public Key

### 4. Ajouter vos fichiers statiques

- `public/images/profile.jpg` → Votre photo de profil (carré, 400×400px min)
- `public/cv.pdf` → Votre CV en PDF

### 5. Lancer en développement

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000)

---

## 🌍 Multilingue

Le site est disponible en :
- **Français** : `http://localhost:3000/fr`
- **Anglais** : `http://localhost:3000/en`

Les traductions sont dans `messages/fr.json` et `messages/en.json`.

Les articles de blog sont dans `content/blog/fr/` et `content/blog/en/`.

---

## 📝 Ajouter un article de blog

Créez un fichier `.md` dans `content/blog/fr/` (ou `en/`) :

```markdown
---
title: "Titre de l'article"
excerpt: "Résumé court affiché dans la liste."
date: "2024-06-01"
readTime: 5
tags: ["Next.js", "React"]
---

## Introduction

Votre contenu Markdown ici...
```

---

## 🎨 Personnaliser les projets

Éditez `data/projects.ts` pour ajouter/modifier vos projets :

```typescript
{
  id: 'mon-projet',
  title: 'Mon Super Projet',
  description: {
    fr: 'Description en français',
    en: 'Description in English',
  },
  image: '/images/projects/mon-projet.jpg',
  technologies: ['Next.js', 'TypeScript'],
  githubUrl: 'https://github.com/...',
  liveUrl: 'https://mon-projet.vercel.app',
  isOnline: true,
  category: 'fullstack', // 'fullstack' | 'frontend' | 'backend'
  featured: true,
}
```

---

## 🚀 Déploiement sur Vercel

```bash
npm run build   # Vérifier que le build passe
```

Puis sur [vercel.com](https://vercel.com) :
1. Importez votre repo GitHub
2. Ajoutez les variables d'environnement EmailJS
3. Déployez !

---

## 🎨 Couleurs & thème

Modifiez `tailwind.config.ts` pour changer les couleurs principales :

```typescript
brand: {
  500: '#6366f1',  // Indigo (couleur principale)
},
accent: {
  500: '#8b5cf6',  // Violet (couleur secondaire)
},
```

---

## 📄 Licence

Projet personnel — © Julius Junior Tchehouenou
