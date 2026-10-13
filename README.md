# 3legant E-Commerce - Frontend

![Figma-Ecommerce-screenshot](/FIGMA_E_COMMERCE_WEBSITE-Client/src/assets/images/E-Commerce-Screenshot.png)

A responsive e-commerce storefront built with React, TypeScript, and Vite. Its visual direction is based on the [3legant E-Commerce UI Design Template on Figma](https://www.figma.com/design/pr4KyoRiwQdH6X5KwApFSa/3legant-E-Commerce-UI-Design-Template--Community-?node-id=3-674&p=f&t=pzGLoqz4S2RRiakc-0).

## Features

- Four storefront home-page variations at `/home/1` through `/home/4`
- Shop, articles, contact, sign-in, and sign-up pages
- Account pages for profile details, addresses, orders, and wishlist
- Responsive layouts and reusable UI components
- Redux Toolkit state management and RTK Query API integration
- Authentication requests with cookie credentials and access-token refresh

Product and editorial content currently comes from local frontend data; the backend provides account and authentication endpoints.

## Tech stack

- React 19 and TypeScript
- Vite
- React Router
- Redux Toolkit and RTK Query

## Getting started

### Requirements

- Node.js compatible with the installed Vite version
- npm
- The [backend](../FIGMA_E_COMMERCE_WEBSITE-Backend) for authentication and account API requests

### Install and run

From this directory:

```bash
npm install
```

Create a local environment file from the example:

```bash
cp .env.example .env
```

On Windows PowerShell, use `Copy-Item .env.example .env` instead.

Start the development server:

```bash
npm run dev
```

Vite prints the local URL when it starts (usually `http://localhost:5173`). The Vite development server proxies `/api` requests to `http://localhost:5000`; start the backend separately for API-backed features.

`VITE_API_URL` can be set in `.env` to use a different API base URL. By default, requests use `/api`.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Type-check and create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Main routes

| Route | Page |
| --- | --- |
| `/home/1` – `/home/4` | Storefront home-page variations |
| `/shop/1` | Shop |
| `/articles` | Articles |
| `/contact` | Contact |
| `/signin` | Sign in |
| `/signup` | Sign up |
| `/users/:username` | Account profile |
| `/users/:username/address` | Account address |
| `/users/:username/orders` | Account orders |
| `/users/:username/wishlist` | Account wishlist |
| `/privacy` | Privacy policy |
| `/use` | Terms of use |

The root route redirects to `/home/1`.

## Related project

See the [backend README](../FIGMA_E_COMMERCE_WEBSITE-Backend/README.md) for API setup and endpoint details.
