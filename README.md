# Dev3 Toolkit

Dev3 Toolkit is a simple Chrome extension that contains four components targeted at power users and developers.

## Getting Started

### Prerequisites

You will need the following to run this project:

- Node.js

  Install Node.js from [here](https://nodejs.org/en/download/), using your preferred package manager (Choco, Scoop, brew, etc) or using the following commands:

  ```sh
  # On Windows
  winget install OpenJS.NodeJS # or scoop install nodejs

  # On Linux (Ubuntu)
  curl -fsSL https://deb.nodesource.com/setup_19.x | sudo -E bash - &&\
  sudo apt-get install -y nodejs
  ```

### Installation

1. Clone the repo

2. Copy `.env.example` to `.env` and update the `VITE_MASTER_KEY` value

   ```sh
   cp .env.example .env
   ```

   Use a random 32-character string for better security. You can generate one securely using the following command:

   ```sh
   openssl rand -base64 24
   ```

   Example key:

   ```ts
   VITE_MASTER_KEY="xcQ+U#LIDUS^kY&8BZPCKFV+Sy^xSX7A"
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

Run the following commands to generate the full documentation based on JSDoc comments in the code.

1. Install [TypeDoc](https://typedoc.org/)

```sh
   npm install --save-dev typedoc
```

2. Generate the documentation with the following command

```sh
   npm run docs
```

3. The documentation can be found in `docs/index.html`

## Recommended VS Code Extensions for Development

- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - for code formatting
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) - for autocomplete in Tailwind CSS classes
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - for linting and error checking
- [Auto Complete Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-complete-tag) - for auto-renaming and auto-completing tags in HTML or React
