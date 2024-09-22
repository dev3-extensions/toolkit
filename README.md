<div align="center">

![CleanShot 2024-09-22 at 11 34 13](https://github.com/user-attachments/assets/d2151b9b-14c9-45bc-a2a0-ddfa25d2bbca)

# 🚀 Dev3 Toolkit

<p>A Chrome extension with powerful utilities for developers and power users. Manage passwords, inspect IndexedDB, sniff HTTP packets, and clean browser data.</p>

<a href="#-introduction">Introduction</a>
<span>&nbsp;&nbsp;✦&nbsp;&nbsp;</span>
<a href="#-features">Features</a>
<span>&nbsp;&nbsp;✦&nbsp;&nbsp;</span>
<a href="#-tech-stack">Tech Stack</a>
<span>&nbsp;&nbsp;✦&nbsp;&nbsp;</span>
<a href="#-directory-structure">Directory Structure</a>
<span>&nbsp;&nbsp;✦&nbsp;&nbsp;</span>
<a href="#-getting-started">Getting Started</a>
<span>&nbsp;&nbsp;✦&nbsp;&nbsp;</span>
<a href="#-roadmap">Roadmap</a>

![Chrome API](https://img.shields.io/badge/Chrome%20Extension-black?style=for-the-badge&logo=ChromeWebStore&logoColor=EAB300)
![Vite](https://img.shields.io/badge/vite-black?style=for-the-badge&logo=vite&logoColor=%23646CFF.svg)
![React](https://img.shields.io/badge/react-black?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwind-black?style=for-the-badge&logo=tailwind-css&logoColor=2338B2AC)
![Radix UI](https://img.shields.io/badge/Radix%20UI-black?style=for-the-badge&logo=radix-ui&logoColor=white)

</div>

## 📝 Introduction

Dev3 Toolkit is a multi-tool Chrome extension designed for developers and power users. It includes features like a password manager, IndexedDB viewer, HTTP packet sniffer, and browser data cleaner. Built with Vite, React, Tailwind CSS, and Radix UI.

## ✨ Features

- **Password Manager**: Securely store and manage passwords locally within your browser.
- **IndexedDB Viewer [WIP]**: Inspect browser-stored data in IndexedDB.
- **Packet Sniffer**: Track HTTP requests made from your browser in real-time.
- **Browser Data Cleaner**: Clear cookies, cache, history, and other stored data from your browser with one click.

## 🛠️ Tech Stack

- **[Vite](https://vitejs.dev/)** - Fast build tool for modern web projects
- **[React](https://react.dev/)** - Component-based UI library
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://radix-ui.com/primitives/)** - Accessible, unstyled UI components
- **[Chrome Extensions API](https://developer.chrome.com/docs/extensions/reference/api)** - For interacting with browser data and functionality
- **[CryptoJS](https://www.npmjs.com/package/crypto-js)** - Secure password management

## 📂 Directory Structure

```
.
├── public               # Public assets and static files
│   └── manifest.json    # Extension metadata and configuration
│
├── src                  # Main source code
│   ├── components       # UI and shared components, with Radix UI + Tailwind CSS
│   ├── contants         # Global contants
│   ├── pages            # Different pages of the extension
│   ├── types            # TypeScript types and interfaces
│   └── utils            # Utility functions and helper methods
│
├── vite.config.ts       # Vite configuration
└── package.json         # Project metadata and dependencies
```

## 🚀 Getting Started

### Prerequisites

You will need the following to run this project:

- Node.js

Install Node.js from [here](https://nodejs.org/en/download/), or using your preferred package manager (Brew, Winget, Scoop, etc) with the following commands:

```sh
# On MacOS or Linux (using Brew)
brew install node@20

# On Windows
winget install OpenJS.NodeJS # or scoop install nodejs
```

- Chrome or any Chromium-based browser

You can use any Chromium-based browser like Arc, Edge, or Brave to load the extension.

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/dev3-extensions/toolkit.git
   cd toolkit
   ```

2. Setup environment variables:

   Copy `.env.example` to `.env` and set `VITE_MASTER_KEY` to a secure, random 32-character string:

   ```sh
   cp .env.example .env
   ```

   Head to https://generate-secret.vercel.app/24 to generate a secure key or use the following command to generate a random key from the terminal:

   ```sh
   openssl rand -base64 24
   ```

   For example, the `.env` file should look like this:

   ```ts
   VITE_MASTER_KEY = 'xcQ+U#LIDUS^kY&8BZPCKFV+Sy^xSX7A'
   ```

3. Install all dependencies

   ```sh
   npm install
   ```

4. (Optional) Run the development server

   ```sh
   npm run dev
   ```

5. Build the extension

   ```sh
    npm run build
   ```

6. Load the extension in Chrome (or any Chromium-based browser)

   1. Open the Extension Management page by navigating to `chrome://extensions`.
   2. Enable Developer Mode by clicking the toggle switch next to Developer mode.
   3. Click on the "LOAD UNPACKED" button and select the `dist` directory. This `dist` directory will only appear after running `npm run build`.

## 🖥️ Recommended VS Code Extensions

- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) - for autocomplete in Tailwind CSS classes
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - for code formatting
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - for linting and maintaining code quality
- [Auto Complete Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-complete-tag) - for auto-renaming and auto-completing React tags

## 🎯 Roadmap

- [ ] Migrate to Manifest V3
- [ ] Complete the IndexedDB Viewer
- [ ] Add data export/import functionality
- [ ] Improve the user interface and performance
- [ ] See [GitHub Issues](https://github.com/dev3-extensions/toolkit/issues?q=sort:updated-desc+is:issue+is:open) for more details and upcoming features

## 🔑 License

- [MIT License](https://github.com/dev3-extensions/toolkit/blob/main/LICENSE).
