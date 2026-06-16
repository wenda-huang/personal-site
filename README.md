# y2k-personal-website

A Windows XP / Y2K-aesthetic personal portfolio site, built with **Vite + React + TypeScript**. Originally generated in Figma Make and exported into a clean, standalone project.

## Tech stack

- [Vite](https://vitejs.dev/) 6
- [React](https://react.dev/) 18
- [TypeScript](https://www.typescriptlang.org/) 5

The entire site lives in a single self-contained component (`src/App.tsx`) using inline styles — no CSS framework required.

## Getting started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (default http://localhost:5173).

## Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the dev server with HMR        |
| `npm run build`   | Type-check and build for production  |
| `npm run preview` | Preview the production build locally |

## Customizing the content

Most of the editable content lives at the top of `src/App.tsx`:

- `PROJECTS` — portfolio entries
- `SKILLS` — skill bars (name + percentage)
- `LINKS` — navigation tabs

Personal details (name, title, bio, contact info, photo) are inline within the
`HomeTab`, `AboutTab`, and `ContactTab` components.
