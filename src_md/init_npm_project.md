<h1>Initialize an NPM TypeScript project</h1>

## Initialize Project

```bash
mkdir my_project
cd my_project
git init
echo "node_modules" >> .gitignore
echo "build" >> .gitignore
npm init -y
```

## Update `package.json`

Set your package.json to look similar to the example below.

Note the `main` and `types` attributes. Other things (like the npm `scripts`) depend on them

```JSON
// package.json
{
  "name": "my_project",
  "version": "0.0.1",
  "description": "my_project",
  "main": "build/index.js",
  "types": "build/index.d.ts",
  "scripts": {
    "build": "rimraf ./build && tsc",
    "start": "npm run build && node build/index.js"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/brombaut/my_project.git"
  },
  "keywords": [],
  "author": "Ben Rombaut",
  "license": "ISC",
  "private": false,
  "bugs": {
    "url": "https://github.com/brombaut/my_project/issues"
  },
  "homepage": "https://github.com/brombaut/my_project#readme",
}
```

## Install basic dependencies

TypeScript has Implicit, Explicit, and Ambient types. Ambient types are types that get added to the global execution scope. Since we're using Node, it would be good if we could get type safety and auto-completion on the Node apis like `file`, `path`, `process`, etc. That's what installing the DefinitelyTyped type definition for Node will do.

```
npm install typescript --save-dev
npm install @types/node --save-dev
npm install rimraf
```

## Create `tsconfig.json`

```bash
tsc --init
```

- **target**: We want to compile to es5 since we want to build a package with browser compatibility.
- **module**: Use commonjs for compatibility.
- **declaration**: When you building packages, this should be true. Typescript will then also export type definitions together with the compiled javascript code so the package can be used with both Typescript and Javascript.
- **outDir**: The javascript will be compiled to the lib folder.
- **include**: All source files in the src folder
- **exclude**: We don’t want to transpile node_modules, neither tests since these are only used during development.

```JSON
//  minimum tsconfig.json
// if you use tsc --init, it will look different, but you should make sure to copy the "outDir", "include", and "exclude" attributes.
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "declaration": true,
    "outDir": "./build",
    "strict": true
  },
  "include": ["src"],
  "exclude": ["node_modules", "**/__tests__/*"]
}
```
