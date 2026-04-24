---
title: "Débuter avec Next.js 14 et l'App Router"
excerpt: "Découvrez les nouveautés de Next.js 14 : l'App Router, les Server Components et les meilleures pratiques pour démarrer."
date: "2024-05-10"
readTime: 8
tags: ["Next.js", "React", "TypeScript", "Web"]
---

## Introduction

Next.js 14 marque une étape importante dans l'évolution du framework React. Avec l'App Router stabilisé, plongeons dans ces nouvelles fonctionnalités.

## L'App Router

Tout se passe désormais dans le dossier `app/`. Les layouts encapsulent les pages, et les routes imbriquées s'expriment en dossiers imbriqués.

## Server Components vs Client Components

Par défaut, tous les composants sont des **Server Components** : ils s'exécutent côté serveur et n'envoient aucun JS au navigateur. Ajoutez `'use client'` pour utiliser les hooks React ou les APIs navigateur.

## Streaming & Suspense

Enveloppez vos composants async dans `<Suspense>` pour diffuser le HTML progressivement plutôt que d'attendre toutes les données.

## Conclusion

L'App Router a une courbe d'apprentissage, mais les gains en performance et en DX le valent largement. Consultez la [documentation officielle](https://nextjs.org/docs) pour aller plus loin !
