# SvelteKit, Sanity.io, and TailwindCSS Project

This project is powered by several powerful technologies: [SvelteKit](https://kit.svelte.dev/), [Sanity.io](https://www.sanity.io/), and [TailwindCSS](https://tailwindcss.com/). It provides a robust frontend built with SvelteKit and TailwindCSS, and leverages Sanity.io for content management. The project also includes basic SEO features to ensure your content is optimized for search engines.

## Creating a project

If you're seeing this, you've probably already set up the project. Congrats!

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Getting Started with Docsify

Docsify is a simple and lightweight tool that you can use to quickly create a documentation site. Here's how you can install and run it:

### Installation

First, you need to install Docsify using npm. Run the following command in your terminal:

```bash
npm i docsify-cli -g
```

This command installs Docsify globally on your system allowing you to use it in any directory.

### Running a Docsify Project

To create a new Docsify project, navigate to your desired directory and run:

```bash
docsify init ./docs
```

This command initializes a new Docsify project in a docs directory.

To preview your project, use the docsify serve command:

```bash
docsify serve docs
```

This command starts a local server, allowing you to preview your Docsify project in your browser.
