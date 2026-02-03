# bjf5201's Personalized Reusable Workflows

This repository contains some reusable workflows for tools that I use most often (TypeScript, Node, PNPM). I plan to add more in the future as I have time.

## Workflows

- CI: Contains continuous integration steps including test, lint, with and option to build for lint.
- CD: Contained continuous deployment steps including CHANGELOG generation (via [changelogen](https://github.com/unjs/changelogen)), syncing with GitHub releases, and publishing the package to an NPM registry (GitHub's NPM registry is set by default, but this can easily be changed via an input).

## Actions

I know I probably should move this into it's own repository, but for now it's here.

- setup-env: Set's up my preferred environment: Node.js, PNPM, and some git config stuff.
