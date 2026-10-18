# Workflow repo for the CA

This is a forked branch from the Noroff Holidaze / Workflow course repo.
This branch has been developed for the course assignment in the FED 2 Workflow course.
The branch serves as a development workflow branch with formatting, linting, pre-commit hooks, unit tests and end to end tests.

## Features

- ESLint and Prettier for linting and formatting project code
- Pre-commit hooks with Husky and lint-staged
- Unit tests with Vitest for functions `isActivePath` and `getUsername`
- End to end tests with Playwright for login and navigation user flow

## Prerequisites

- Node.js (Unsure about exact version requirement. Everything is developed and tested on v25.7.0)
- npm

## Getting started

### Installation

```bash
npm install
npx playwright install
```

### Running the project

```bash
npm start
```

### Running tests

```bash
npm run test:unit
npm run test:e2e
```

## Environment Variables

Create a `.env` file in the root directory (copy .env.example):

```bash
TEST_USER_EMAIL=your-email@stud.noroff.no
TEST_USER_PASSWORD=your-password
```

## Available Scripts

- `npm start` - Start development live-server on port 5500
- `npm run test:unit` - Run Vitest unit tests
- `npm run test:e2e` - Run Playwright end to end tests

## Technologies

- JavaScript
- HTML
- CSS
- ESLint
- Prettier
- Husky and lint-staged
- Vitest
- Playwright

## Author

tobhan8 - Tobias Hanevik
