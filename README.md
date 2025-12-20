<h2 align="center">Paleodra</h2>
<!-- <div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="./logo-dark.png">
    <source media="(prefers-color-scheme: light)" srcset="./logo-light.png">
    <img alt="logo" width="512" height="140" src="./logo.png">
  </picture>
</div> -->

<div align="center" id="badges">
  <a href="https://github.com/vikiru/paleodra/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-aqua" alt="MIT License Badge"/>
  </a>
  <a href="https://biomejs.dev">
    <img alt="Static Badge" src="https://img.shields.io/badge/Formatted_with-Biome-60a5fa?style=flat&logo=biome">
  </a>
  <a href="https://github.com/vikiru/paleodra/releases">
    <img src="https://img.shields.io/github/v/release/vikiru/paleodra" alt="Release"/>
  </a>
  <a href="https://github.com/vikiru/paleodra/issues?q=is%3Aissue+is%3Aclosed">
    <img src="https://img.shields.io/github/issues-closed/vikiru/paleodra" alt="Closed Issues"/>
  </a>
  <a href="https://github.com/vikiru/paleodra/pulls?q=is%3Apr+is%3Aclosed">
    <img src="https://img.shields.io/github/issues-pr-closed/vikiru/paleodra?label=closed%20prs" alt="Closed PRs"/>
  </a>
</div>

---

**Paleodra** is a dinosaur discovery web application where users can explore, learn, and track all of their seen dinosaurs across the application.

> [!IMPORTANT]
>
> The data used within the application is taken directly from **Wikipedia** via its API, as is. All images and text belong to their respective authors, and attribution is provided accordingly for both within the API responses.
> 
> All dinosaur text information sourced from Wikipedia articles are licensed under [Creative Commons Attribution-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-sa/4.0/), unless otherwise noted.
> 
> All dinosaur images are sourced from Wikimedia Commons and are licensed under various licenses - each with their own specific license terms and are attributed accordingly.


## 📖 Table of Contents

- [📖 Table of Contents](#-table-of-contents)
- [🌟 Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📝 Prerequisites](#-prerequisites)
- [⚡ Setup Instructions](#-setup-instructions)
- [📜 Available Scripts](#-available-scripts)
- [✨ Acknowledgments](#-acknowledgments)
- [©️ License](#️-license)

## 🌟 Features

- Comprehensive information on almost 1,200 dinosaur species
- Track your progress of seen dinosaurs via the DinoDex
- Search for dinosaurs by name and filter by diet and locomotion type

## 🛠️ Tech Stack

- Frontend: [TypeScript](https://www.typescriptlang.org/), [Next.js](https://nextjs.org/), [React](https://reactjs.org/), [Zustand](https://github.com/pmndrs/zustand), [Zod](https://zod.dev/), [shadcn/ui](https://ui.shadcn.com/), [Lucide React Icons](https://lucide.dev/), [Tailwind CSS](https://tailwindcss.com/)

- Backend: [Node.js](https://nodejs.org/), [Express.js](https://expressjs.com/), [MongoDB](https://www.mongodb.com/), [Mongoose](https://mongoosejs.com/)

For more information on my backend API, please see the repository for RESTasaurus [here](https://github.com/vikiru/restasaurus).

## 📝 Prerequisites

Ensure that the following prerequisites are installed on your system by following the [Setup Instructions](#-setup-instructions):

- [Node.js](https://nodejs.org/)

## ⚡ Setup Instructions

1. Clone this repository to your local machine.

```bash
git clone https://github.com/vikiru/paleodra.git
cd paleodra
```

2. Install dependencies.

```bash
pnpm install
```

3. Fetch the neccessary data from the backend API, using [`fetchData.ts`](./src/scripts/fetchData.ts)

```bash
pnpm prebuild
```

4. Start the development server.

```bash
pnpm dev
```

The application will be running and available at the following URL:

```bash
http://localhost:3000
```

## 📜 Available Scripts

1. Start the development server.

```bash
pnpm dev
```

2. Build the production version of the application.

```bash
pnpm build
```

3. Start the production server after building.

```bash
pnpm start
```

4. Lint files using [Biome](https://biomejs.dev).

```bash
pnpm lint
```

5. Format files using [Biome](https://biomejs.dev).

```bash
pnpm format
```

6. Run TypeScript type checks without emitting files.

```bash
pnpm typecheck
```

7. Prepare Git hooks via [Lefthook](https://github.com/evilmartians/lefthook).

```bash
pnpm postinstall
```

8. Run the data fetching script to populate local data JSON files (these will be stored in `src/data/`).

```bash
pnpm prebuild
```

9. Check unused dependencies and files with [Knip](https://github.com/webpro-nl/knip).

```bash
pnpm unused
```

## ✨ Acknowledgments

- [FlexSearch](https://github.com/nextapps-de/flexsearch)
- [Superjson](https://github.com/flightcontrolhq/superjson)
- [Lefthook](https://github.com/evilmartians/lefthook)
- [Knip](https://github.com/webpro-nl/knip)
- [Shields Badges](https://github.com/badges/shields)
- [Semantic Release](https://github.com/semantic-release/semantic-release)
- [Favicon Generator](https://favicon.io/favicon-generator/)


Additionally, this app would not be possible without the dinosaur information and image information retrieved from all of the [Wikipedia](https://en.wikipedia.org/wiki/Main_Page) articles accessed through the [Wikipedia API](https://www.mediawiki.org/wiki/Special:MyLanguage/API:Main_page). All images and text used within this application belong to their respective authors.


## ©️ License

The contents of this repository are licensed under the [MIT License](https://choosealicense.com/licenses/mit/).

[MIT](LICENSE) &copy; 2025-present Visakan Kirubakaran.
