# Setting up and publishing a Typscript package on npm with linting and testing coverage

## 1. Project Setup

### Create empty remote repository

### Clone and initialize project

```bash
git clone git@github.com:brombaut/firebase-firestore-facade.git
cd firebase-firestore-facade/
npm init -y
```

### Update `package.json`

Set your package.json to look similar to the example below. Sepcifically, change the following attributes:

- version
- description
- main
- types
- scripts
- author

```JSON
// package.json
{
  "name": "firebase-firestore-facade",
  "version": "0.0.1",
  "description": "Facade of Firebase Firestore",
  "main": "lib/index.js",
  "types": "lib/index.d.ts",
  "scripts": {
    "build": "tsc",
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/brombaut/firebase-facade.git"
  },
  "keywords": [
    "Firebase"
  ],
  "author": "Ben Rombaut",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/brombaut/firebase-facade/issues"
  },
  "homepage": "https://github.com/brombaut/firebase-facade#readme",
}
```

### Create `tsconfig.json`

- target: We want to compile to es5 since we want to build a package with browser compatibility.
- module: Use commonjs for compatibility.
- declaration: When you building packages, this should be true. Typescript will then also export type definitions together with the compiled javascript code so the package can be used with both Typescript and Javascript.
- outDir: The javascript will be compiled to the lib folder.
- include: All source files in the src folder
- exclude: We don’t want to transpile node_modules, neither tests since these are only used during development.

### Set output dir to ./lib

```JSON
// tsconfig.json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "declaration": true,
    "outDir": "./lib",
    "strict": true
  },
  "include": ["src"],
  "exclude": ["node_modules", "**/__tests__/*"]
}
```

## 5. Create first file and first build

```bash
mkdir src && touch src/index.ts
```

```JS
// src/index.ts
export const Greeter = (name: string): string => `Hello ${name}`;
```

```bash
npm run build
```

## 6. Adding Linting (eslint) and Formatting (prettier)

<hr>

````
## Linting and formatting
### Install es-lint
```bash
npm i --save-dev eslint prettier eslint-config-prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin
````

### Create `.eslintrc`

```JSON
// .eslintrc
{
  "root": true,
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "@typescript-eslint"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ]
}
```

### Create `.eslintignore`

```bash
# .eslintignore
# don't ever lint node_modules
node_modules
# don't lint build output (make sure it's set to your correct build folder name)
lib
# don't lint coverage output
coverage
# don't lint jest config file
jest.config.js
```

### Add `.prettierrc`

```JSON
// .prettierrc
{
  "printWidth": 120,
  "trailingComma": "all",
  "singleQuote": true
}
```

### Add format and lint scripts to `package.json`

```JSON
// package.json snippet
{
"scripts": {
    "build": "tsc",
    "format": "prettier --write \"src/**/*.ts\"",
    "lint": "npx eslint . --ext .js,.jsx,.ts,.tsx",
  },
}
```

### You can now run

```bash
npm run lint
npm run format
```

## Testing

<hr>

### Installing Jest

```bash
npm install -D jest ts-jest @types/jest
npx ts-jest config:init
```

### Configure `jest.config.js`

```JSON
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    "^.+\\.(t|j)sx?$": "ts-jest"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  collectCoverage: true
};
```

### Add test script command to package.json

```JSON
// package.json snippet
{
  "scripts": {
    "build": "tsc",
    "format": "prettier --write \"src/**/*.ts\"",
    "lint": "npx eslint . --ext .js,.jsx,.ts,.tsx",
    "test": "jest --config jest.config.js",
    "test-watch": "jest --config jest.config.js --watch"
  },
}
```

### Running first test

In the src folder, add a new folder called `__tests__` and inside, add a new file with a name you like, but it has to end with test.ts, for example Greeter.test.ts

```TypeScript
// src/__tests__/Greeter.test.ts
import { Greeter } from '../index';

test('My Greeter', () => {
  expect(Greeter('Ben')).toBe('Hello Ben');
});
```

Run tests

```bash
npm run test
```

<h2>Adding CI with GitHub Actions</h2>
<hr>

<p>

https://docs.github.com/en/actions/guides/building-and-testing-nodejs
https://docs.github.com/en/actions/reference/environments
https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#example-using-a-single-environment-name
https://stackoverflow.com/questions/61117865/how-to-set-environment-variable-in-node-js-process-when-deploying-with-github-ac

</p>

<h2>Adding test coverage with codecov</h2>
<hr>

https://about.codecov.io/blog/javascript-code-coverage-using-github-actions-and-codecov/

https://shields.io/category/coverage

### Sign up on codcode and sync your GitHub repos

### Install codecov

```bash
npm install -D codecov
```

<h2>Keep dependencies up to date with Dependabot</h2>
<hr>

### Create `dependabot.yml`

```bash
mkdir .github && touch .github/dependabot.yml
```

```yml
# .github/dependabot.yml
# To get started with Dependabot version updates, you'll need to specify which
# package ecosystems to update and where the package manifests are located.
# Please see the documentation for all configuration options:
# https://help.github.com/github/administering-a-repository/configuration-options-for-dependency-updates

version: 2
updates:
  - package-ecosystem: "npm" # See documentation for possible values
    directory: "/" # Location of package manifests
    schedule:
      interval: "daily"
    open-pull-requests-limit: 10
```

### Auto-merge pull requests that pass your CI run.

```bash
mkdir .github/workflows && touch .github/workflows/main.yml
```

```yml
# .github/workflows/main.yml
name: article-tracker

on: [pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v1
        with:
          node-version: 14
      - run: npm ci
      - run: npm run lint
      - run: npm run build
  automerge:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - uses: fastify/github-action-merge-dependabot@v1
        if: ${{ github.actor == 'dependabot[bot]' && github.event_name == 'pull_request' }}
        with:
          github-token: ${{secrets.github_token}}
```

<h2>Adding sparkle with badges</h2>
<hr>
https://shields.io/

<h2>Publishing to NPM</h2>
<hr>

TODO

### Only include what you need in your npm package

Add the files attribute to package.json

```JSON
// package.json snippet
{
  "files": [
    "lib/**/*"
  ],
}
```

https://itnext.io/step-by-step-building-and-publishing-an-npm-typescript-package-44fe7164964c

"prepare" : "npm run build",
"prepublishOnly" : "npm test && npm run lint",
"preversion" : "npm run lint",
"version" : "npm run format && git add -A src",
"postversion" : "git push && git push --tags"
