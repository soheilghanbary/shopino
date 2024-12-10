# Shopino

Shopino is a modern and responsive e-commerce platform built with **Next.js**, **React**, **TailwindCSS**, and **TypeScript**. The project demonstrates advanced front-end development techniques and serves as a showcase for modern e-commerce web application design.

## Features

- 🌟 **Responsive Design**: Optimized for all screen sizes.
- ⚡ **Fast and Dynamic**: Leveraging the power of Next.js for server-side rendering (SSR) and static site generation (SSG).
- 🎨 **Customizable UI**: Built with TailwindCSS for easy styling and customization.
- 🔐 **Secure and Scalable**: Designed with TypeScript for robust and maintainable code.

---

## Table of Contents

1. [Getting Started](#getting-started)
2. [Tech Stack](#tech-stack)
3. [Folder Structure](#folder-structure)
4. [Contributing](#contributing)
5. [License](#license)

---

## Getting Started

Follow these steps to run the project locally.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16+)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/soheilghanbary/shopino.git
   
   cd shopino
   
   pnpm install && pnpm run dev

   start http://localhost:3000
   ```

2. Open [http://localhost:3000](http://localhost:3000) with your browser to see the project in action.

---

## Tech Stack

- **Next.js**: A React framework for server-side rendering (SSR) and static site generation (SSG).
- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript that adds static typing and other features.
- **TailwindCSS**: A utility-first CSS framework that provides a set of pre-defined classes.
- **Vercel**: A cloud platform for hosting and deploying web applications.

---

## Folder Structure

```
.
├── public
│   ├── favicon.ico
│   └── robots.txt
├── src
│   ├── app
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── product
│   │       ├── [id].tsx
│   │       └── page.tsx
│   ├── components
│   │   ├── common
│   │   │   ├── icons
│   │   │   │   ├── NextjsIcon.tsx
│   │   │   │   ├── ReactIcon.tsx
│   │   │   │   └── TailwindCSSIcon.tsx
│   │   │   └── mode-toggle.tsx
│   │   ├── features
│   │   │   ├── CartModal.tsx
│   │   │   ├── CategoryList.tsx
│   │   │   ├── FeaturedProducts.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── MadeBy.tsx
│   │   │   ├── ProductList.tsx
│   │   │   ├── ProductSkeleton.tsx
│   │   │   ├── Products.tsx
│   │   │   ├── SearchProduct.tsx
│   │   │   └── page.tsx
│   │   ├── layouts
│   │   │   ├── Header.tsx
│   │   │   └── Main.tsx
│   │   ├── ui
│   │   │   ├── button.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── drawer.tsx
│   │   │   ├── input.tsx
│   │   │   ├── scroll-area.tsx
│   │   │   └── skeleton.tsx
│   │   └── utils.ts
│   ├── config
│   │   └── site.ts
│   ├── next.config.js
│   ├── package.json
│   ├── postcss.config.js
│   ├── README.md
│   ├── tailwind.config.js
│   └── tsconfig.json
├── LICENSE
└── pnpm-lock.yaml
```
