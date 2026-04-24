---
title: "Tailwind CSS : les astuces que je plébiscite au quotidien"
excerpt: "Après 2 ans d'utilisation intensive de Tailwind CSS, voici les patterns, plugins et astuces qui ont transformé ma façon de styliser mes interfaces."
date: "2024-04-22"
readTime: 6
tags: ["Tailwind CSS", "CSS", "Design", "Frontend"]
---

## Pourquoi Tailwind a changé ma vision du CSS

Quand j'ai découvert Tailwind CSS, j'étais sceptique. Écrire des classes HTML à rallonge me semblait être un retour en arrière. Deux ans plus tard, je ne peux plus m'en passer.

## Astuce 1 : Extraire des composants avec @apply

Pour éviter la répétition, utilisez `@apply` dans votre CSS global :

```css
/* globals.css */
.btn-primary {
  @apply px-6 py-3 bg-blue-600 hover:bg-blue-700 
         text-white font-medium rounded-xl
         transition-all duration-200 hover:-translate-y-0.5;
}
```

Ainsi, dans votre JSX :

```tsx
<button className="btn-primary">Envoyer</button>
```

## Astuce 2 : Les variants arbitraires

Tailwind permet d'utiliser des valeurs arbitraires entre crochets :

```html
<div class="w-[347px] bg-[#1a1a2e] mt-[13px]">
```

Particulièrement utile pour les valeurs qui ne figurent pas dans votre config.

## Astuce 3 : Le dark mode avec `class`

Configurez le dark mode avec la stratégie `class` pour un contrôle total :

```js
// tailwind.config.ts
module.exports = {
  darkMode: 'class',
}
```

Puis dans votre HTML :

```html
<div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
```

## Astuce 4 : Animations personnalisées

Étendez la config pour vos animations custom :

```js
theme: {
  extend: {
    keyframes: {
      shimmer: {
        '100%': { transform: 'translateX(100%)' },
      },
    },
    animation: {
      shimmer: 'shimmer 1.5s infinite',
    },
  },
}
```

## Astuce 5 : Le plugin Typography

Pour les contenus en Markdown ou HTML dynamique, le plugin `@tailwindcss/typography` est indispensable :

```bash
npm install @tailwindcss/typography
```

```html
<article class="prose prose-zinc dark:prose-invert max-w-none">
  <!-- Votre contenu HTML sera automatiquement stylisé -->
</article>
```

## Conclusion

Tailwind CSS brille vraiment dans les projets où la cohérence du design est primordiale. Sa capacité à rester dans le flux JSX/HTML, sans jongler entre fichiers CSS, en fait l'outil parfait pour les développeurs modernes.

Bon coding ! 🚀
