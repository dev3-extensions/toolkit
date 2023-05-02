# Dev3 Toolkit

Dev3 Toolkit is a simple Chrome extension that contains four components targeted at power users and developers.

## Getting Started

### Prerequisites

You will need the following to run this project:

- Node.js

  Install Node.js from [here](https://nodejs.org/en/download/), using your preferred package manager (Choco, Scoop, brew, etc) or using the following commands:

  ```sh
  # On Windows
  winget install OpenJS.NodeJS

  # On Linux (Ubuntu)
  curl -fsSL https://deb.nodesource.com/setup_19.x | sudo -E bash - &&\
  sudo apt-get install -y nodejs
  ```

### Installation

1. Clone the repo

2. Copy the `.env.example` and create a new `.env` file on the root directory

   ```sh
   cp .env.example .env
   ```

   The `.env` file should have `VITE_MASTER_KEY`
   for better practice use a random string with lenght 32
   the `.env` file should look like this

   ```ts
   VITE_MASTER_KEY = 'xcQ+U#LIDUS^kY&8BZPCKFV+Sy^xSX7A'
   ```

3. Install NPM packages

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
   3. Click the LOAD UNPACKED button and select the `dist` directory.

7. Profit! :tada:

## Documentation

Run the following commands to generate the full documentation based on JSDoc comments:

1. Install [TypeDoc](https://typedoc.org/)

```sh
   npm install --save-dev typedoc
```

2. Generate the documentation with the following command

```sh
   npx typedoc --out docs ./src/**/*
```

3. The documentation can be found in `docs/index.html`

## Recommended VS Code Extensions for Development

- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - for code formatting
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) - for autocomplete in Tailwind CSS classes
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - for linting and error checking
- [Auto Complete Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-complete-tag) - for auto-completing any tags like in HTML or React
