<h1>Publish a TypeScript project to NPM</h1>

## Add publishing related scripts

Only take what you need form this (e.g., if you don't have linting, you don't need `preversion`).
At a minimum, you should have `prepare`, `version`, and `postversion`.

- **prepare** will run both BEFORE the package is packed and published, and on local npm install. Perfect for running building the code. Add this script to package.json
- **prepublishOnly** will run BEFORE prepare and ONLY on npm publish. Here we will run our test and lint to make sure we don’t publish bad code
- **preversion** will run before bumping a new package version. To be extra sure that we’re not bumping a version with bad code, why not run lint here as well?
- **version** will run after a new version has been bumped. If your package has a git repository, like in our case, a commit and a new version-tag will be made every time you bump a new version. This command will run BEFORE the commit is made. One idea is to run the formatter here and so no ugly code will pass into the new version:
- **postversion** will run after the commit has been made. A perfect place for pushing the commit as well as the tag.

```JSON
// ...package.json snippet
{
  "scripts": {
    "prepare" : "npm run build",
    "prepublishOnly" : "npm test && npm run lint",
    "preversion" : "npm run lint",
    "version" : "npm run format && git add -A src",
    "postversion" : "git push && git push --tags"
  }
}
```

## Only include what you need in your npm package

Add the files attribute to package.json. This assumes your output build folder is `lib`.

```JSON
// ...package.json snippet
{
  "files": [
    "lib/**/*"
  ],
}
```

## Commit and push to git

```bash
git add -A && git commit -m "Setup Package"
git push
```

## Publish to NPM

First login in console

```bash
npm login
```

Then publish. If you are using scoped packages, you have to add the `--access public` flag.

```bash
npm publish --access public
```

## Bump version

```bash
npm version patch
```

Our preversion, version, and postversion will run, create a new tag in git and push it to our remote repository. Now publish again.

```bash
npm publish --access public
```
