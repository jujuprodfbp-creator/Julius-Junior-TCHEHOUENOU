---
title: "Getting Started with Next.js 14 and the App Router"
excerpt: "Explore the highlights of Next.js 14 — the App Router, Server Components, and best practices to kick off your first project."
date: "2024-05-10"
readTime: 8
tags: ["Next.js", "React", "TypeScript", "Web"]
---

## Introduction

Next.js 14 marks a pivotal moment in React development. With the App Router stable and Server Components the new default, it's time to dive in.

## The App Router

Everything now lives in the `app/` folder. Layouts wrap pages, and nested routes are expressed as nested directories.

## Server vs Client Components

By default all components are Server Components — they run on the server and ship zero JS to the client. Add `'use client'` at the top of a file to opt into browser APIs and hooks.

## Streaming & Suspense

Wrap async components in `<Suspense>` to stream HTML progressively instead of waiting for all data before rendering.

## Wrapping up

The App Router has a learning curve but the performance and DX payoff is real. Dive into the [official docs](https://nextjs.org/docs) to go deeper!
