# Electron Template

An Electron application template with React, TypeScript, and DaisyUI.

## Features

- ⚡ Electron - Build cross-platform desktop apps with JavaScript, HTML, and CSS
- ⚛️ React 19 - A JavaScript library for building user interfaces
- 🔷 TypeScript - JavaScript with syntax for types
- 🎨 TailwindCSS - A utility-first CSS framework
- 🌼 DaisyUI - Component library for Tailwind CSS
- 🔍 ESLint - Linting utility for JavaScript and TypeScript
- ✨ Prettier - Code formatter
- 📦 Vite - Next generation frontend tooling

## Prerequisites

- [Node.js](https://nodejs.org/) (v22.11.0)
- npm (included with Node.js)

## Installation

Clone the repository and install the dependencies:

```bash
# Clone this repository
git clone https://github.com/sint18/electron-template.git

# Navigate into the repository
cd electron-template

# Install dependencies
npm install
```

## Development

Start the app in development mode:

```bash
npm start
```

This will launch the Electron application with hot-reloading enabled.

## Building

Package the app for your current platform:

```bash
npm run package
```

Create distributable packages for specific platforms:

```bash
npm run make
```

## Scripts

- `npm start` - Start the app in development mode
- `npm run package` - Package the app without creating installers
- `npm run make` - Create distributable packages for target platforms
- `npm run publish` - Publish the app to configured targets
- `npm run lint` - Run ESLint to check for code issues

## Technologies

- Electron 36.3.1
- React 19.1.0
- TypeScript 4.5.4
- TailwindCSS 4.1.8
- DaisyUI 5.0.43
- Vite 6.3.5

## License

MIT