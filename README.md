# Artifact8

## Overview

Artifact8 is a minimal Express.js tutorial server that exposes two plain-text HTTP `GET` endpoints: one that responds with `Hello world` and one that responds with `Good evening`. It is built on the Express 5 web framework running on Node.js, with all routing defined in a single file, `server.js`.

## Prerequisites

- **Node.js 22 LTS** — the version line pinned in [`.nvmrc`](.nvmrc). If you use [nvm](https://github.com/nvm-sh/nvm), run `nvm use` in the project root to automatically select this version.
- **npm** — distributed with Node.js; used to install the dependencies and to run the server.

Express 5 requires **Node.js >= 18**, which matches the `engines.node` constraint declared in [`package.json`](package.json); Node.js 22 LTS satisfies this requirement.

## Installation

From the repository root, install the project's dependencies:

```bash
npm install
```

This installs [Express](https://www.npmjs.com/package/express) — the sole production dependency — into `node_modules/` and resolves the exact, locked dependency tree recorded in `package-lock.json`.

## Running the server

Start the server with:

```bash
npm start
```

This is equivalent to running `node server.js` (it mirrors the `scripts.start` value in `package.json`). By default the server listens on port **3000**. The port is overridable through the `PORT` environment variable:

```bash
PORT=8080 npm start
```

On startup, the server logs the port it is listening on, for example:

```
Server listening on port 3000
```

## Endpoints

| Method | Path            | Status | Response Body  |
|--------|-----------------|--------|----------------|
| GET    | `/`             | 200    | `Hello world`  |
| GET    | `/good-evening` | 200    | `Good evening` |

Any other (undeclared) path returns Express's default `404 Not Found` response.

With the server running, you can exercise both endpoints with `curl`:

```bash
curl http://localhost:3000/             # -> Hello world
curl http://localhost:3000/good-evening # -> Good evening
```
