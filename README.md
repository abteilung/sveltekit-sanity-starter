# Sanity.io & SvelteKit & Tailwind etc. Starter

This is a Sanity.io & SvelteKit & TailwindCSS & daisyUI & Stuff starter repo. We've put much research and effort into this very well spiced set of tools.

## WIP

This repo is just progressing. Expect many breaking changes for the time being.

## Sanity.io

Basic configuration with many useful modules installed and preconfigured for your convenience.

Most importantly, Presentation is enabled which allows you to conveniently edit your website Sanity's Presentation (Preview) mode.

## Tailwind & daisyUI

We like Tailwind CSS a lot. daisyUI adds many useful and nicely configured components to the plate. While CSS only components are nice, we'll enhance some components with some Svelte Magic.

The base template includes light / dark modes.

## SEO Features included

As of now we render Robots.txt and Sitemap.xml from Sanity documents. Adjust them to your needs.

Soon, there will be more:

- Auto SEO-Tags in the frontend with fallbacks
- an RSS Feed for Posts and News
- Auto generated OG Images

## Developing

Before running the project, please copy .env.example to .env and adjust settings to your needs. You'll need a Sanity project (you'll get it for free).

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
