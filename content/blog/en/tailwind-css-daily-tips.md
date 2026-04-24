---
title: "Tailwind CSS: the tricks I rely on every day"
excerpt: "After 2 years of heavy Tailwind CSS usage, here are the patterns, plugins and tips that transformed the way I style interfaces."
date: "2024-04-22"
readTime: 6
tags: ["Tailwind CSS", "CSS", "Design", "Frontend"]
---

## Why Tailwind changed my CSS mindset

When I first discovered Tailwind CSS, I was skeptical. Writing long class strings directly in HTML felt like a step backward. Two years on, I can't imagine working without it.

## Tip 1: Extract components with @apply

To avoid repetition, use `@apply` in your global CSS:

```css
/* globals.css */
.btn-primary {
  @apply px-6 py-3 bg-blue-600 hover:bg-blue-700 
         text-white font-medium rounded-xl
         transition-all duration-200 hover:-translate-y-0.5;
}
```

Then in your JSX:

```tsx
<button className="btn-primary">Submit</button>
```

## Tip 2: Arbitrary variants

Tailwind lets you use arbitrary values inside square brackets:

```html
<div class="w-[347px] bg-[#1a1a2e] mt-[13px]">
```

Especially handy for values that aren't in your theme config.

## Tip 3: Dark mode with `class`

Set up dark mode with the `class` strategy for full control:

```js
// tailwind.config.ts
module.exports = {
  darkMode: 'class',
}
```

Then in your HTML:

```html
<div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
```

## Tip 4: Custom animations

Extend the config for your custom keyframes:

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

## Tip 5: The Typography plugin

For Markdown or dynamic HTML content, `@tailwindcss/typography` is essential:

```bash
npm install @tailwindcss/typography
```

```html
<article class="prose prose-zinc dark:prose-invert max-w-none">
  <!-- Your HTML content will be styled automatically -->
</article>
```

## Wrapping up

Tailwind CSS truly shines in projects where design consistency is critical. Its ability to keep you in the JSX/HTML flow — without context-switching to separate CSS files — makes it the perfect tool for modern developers.

Happy coding! 🚀
