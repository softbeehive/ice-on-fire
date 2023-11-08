# Houses of Ice and Fire

❄️  
Live demo - https://ice-and-fire.softbeehive.com  
🔥

## ⚡️ Summary

- Search by house name (full or partial)
- Get detailed house info
- Design system based on Material 3
- Tailored UI design
- UX: mobile-friendly
- UX: dark / light theme included
- UX: loading and error masks
- DX: use multiple frameworks thanks to Astro Islands
- DX: backend-for-frontend in the same repo
- DX: automatic code formatting and linting in VS Code
- Server and client rendered html
- Added end-to-end tests
- Deployed to Netlify

## 👩‍💻 Tech stack

- Typescript
- Astro
- Vue
- Tailwindcss
- pnpm
- Eslint
- Prettier
- Cypress

## 🚀 Quickstart

### 1. Install dependencies

```bash
pnpm install
```

### 2. Start dev server

```bash
pnpm dev
```

## 🤌 Known issues

- Houses are not persisted between page navigation
  - **Cause**: client-side html rendering
  - **Solutions**: fetch data based on URL parameters OR use ViewTransitions API
- Potential external API rate limiting
  - **Cause**: need to search across all houses
  - **Solution**: use dedicated data storage, e.g. MongoDB, Redis

## 🌳 Future

- Create a universal search with autocomplete to search characters, events, and houses
- Own the data to improve the quality and performance of web app
- Personalize houses: add heraldry, custom theming, images of characters
- Build a map of Westeros & Essos to explore great houses and their relationships

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command              | Action                                           |
| :------------------- | :----------------------------------------------- |
| `pnpm install`       | Installs dependencies                            |
| `pnpm run dev`       | Starts local dev server at `localhost:4321`      |
| `pnpm run build`     | Build your production site to `./dist/`          |
| `pnpm run preview`   | Preview your build locally, before deploying     |
| `pnpm run astro ...` | Run CLI commands like `astro add`, `astro check` |
