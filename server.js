'use strict';

/**
 * server.js — Express.js application entry point for the Artifact8 tutorial server.
 *
 * This is a minimal, single-file HTTP server built on the Express.js web
 * framework (the project's sole production dependency). It supersedes the
 * native Node.js `http` request-handling model with Express's declarative
 * routing: each endpoint is expressed as a discrete `app.get(path, handler)`
 * declaration, and responses are written with the `res.send(...)` helper.
 *
 * Endpoints:
 *   GET /              -> 200, body: "Hello world"   (preserved behavior contract)
 *   GET /good-evening  -> 200, body: "Good evening"  (additive endpoint)
 *   <any other path>   -> 404 Not Found              (Express default fallthrough)
 *
 * The HTTP listening port is resolved from the environment (twelve-factor
 * configuration): `process.env.PORT` when provided, otherwise the Express
 * convention of 3000. `app.listen(...)` wraps Node's `http.createServer`,
 * preserving the underlying HTTP transport semantics.
 *
 * Run:
 *   npm start        (equivalently: node server.js)
 *
 * @module server
 */

// CommonJS import of the Express framework. The package is declared in
// package.json (dependencies.express: "^5.2.1") and installed under
// node_modules/ via `npm install`. The repository uses CommonJS (package.json
// declares no "type": "module"), so `require` — not ESM `import` — is correct.
const express = require('express');

// Instantiate the Express application. This single instance acts as the
// front-controller / application object that centralizes request dispatch,
// replacing any hand-written `req.url` branching of a native `http` handler.
const app = express();

// Resolve the listening port from externalized configuration. Defaults to the
// Express convention of 3000 and is overridable via the PORT environment
// variable (e.g., `PORT=8080 node server.js`).
const PORT = process.env.PORT || 3000;

/**
 * GET / — Root route.
 *
 * Returns the plain response "Hello world". This preserves the originally
 * described endpoint's response contract byte-for-byte.
 *
 * @param {import('express').Request} req - The incoming HTTP request.
 * @param {import('express').Response} res - The outgoing HTTP response.
 */
app.get('/', (req, res) => {
  res.send('Hello world');
});

/**
 * GET /good-evening — Greeting route.
 *
 * Returns the plain response "Good evening". This is the new, purely additive
 * endpoint introduced alongside the preserved root route.
 *
 * @param {import('express').Request} req - The incoming HTTP request.
 * @param {import('express').Response} res - The outgoing HTTP response.
 */
app.get('/good-evening', (req, res) => {
  res.send('Good evening');
});

// Bind the server and begin accepting connections. The callback confirms a
// successful start by logging the active port. Unmatched paths automatically
// receive Express's default "404 Not Found" response.
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
