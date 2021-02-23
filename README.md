## Overview

- `pages/api/*` - [API routes](https://nextjs.org/docs/api-routes/introduction).
- `pages/blog/*` - Static pre-rendered blog pages using [MDX](https://github.com/mdx-js/mdx).
- `pages/blog/legacy*` - Same as blog, but for my old posts (in Spanish).
- `pages/*` - All other static pages.

## Running Locally

```bash
$ git clone https://github.com/ryck/ryck.xyz.git
$ cd ryck.xyz
$ yarn
$ yarn dev
```

Create a `.env.local` file similar to [`.env.example`](https://github.com/ryck/ryck.xyz/blob/master/.env.example).

## Roadmap

- [x] ESLint + Prettier
- [ ] PWA support
- [ ] Layout persistence

## Built Using

- [Next.js](https://nextjs.org/)
- [Vercel](https://vercel.com)
- [MDX](https://github.com/mdx-js/mdx)
- [Tailwind CSS](https://tailwindcss.com/)
