# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Linktree-lite is a minimal, static personal link page. It uses vanilla HTML/CSS/JavaScript with Tailwind CSS v4 - no build tools, package managers, or dependencies required.

## Development Commands

```bash
# Local development - serve static files
python3 -m http.server 8000

# Docker build and run
docker build -t linktree-lite .
docker run -p 8080:80 linktree-lite
```

There is no build step, test suite, or linting configuration.

## Architecture

- **index.html** - Single page entry point, uses Tailwind utility classes
- **config.js** - All customization (name, links, assets) in one configuration object
- **scripts/main.js** - Email copy-to-clipboard functionality with IIFE pattern
- **styles/tailwind.css** - Pre-compiled Tailwind CSS v4 framework
- **styles/custom.css** - Additional animations (gradient-pulse, hover effects)
- **assets/** - SVG avatar and favicon

The app loads configuration from `config.js` and dynamically renders the link page. All styling uses Tailwind utilities with custom CSS animations for the pulsating gradient effects.

## Deployment

GitHub Actions workflow (`.github/workflows/publish-docker-image.yml`) builds and pushes Docker images to ghcr.io on pushes to main. The Dockerfile uses nginx:alpine to serve static files.
