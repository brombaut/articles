## Add NPM access token

Follow the steps at [https://docs.npmjs.com/about-access-tokens](https://docs.npmjs.com/about-access-tokens).

## Create a dispatchable GitHub Actions YAML file.

```yml
# .github/workflows/npm_publish.yml
name: Publish new version to NPM
on:
  workflow_dispatch:
    inputs:
      version_update_type:
        description: "SemVer update version type (patch, minor, or major)"
        required: true
        default: "patch"

jobs:
  publish_to_npm:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - run: git config --global user.name 'Ben Rombaut'
      - run: git config --global user.email 'rombaut.benj@gmail.com'
      - run: npm ci
      - run: npm version ${{ github.event.inputs.version_update_type }}
      - uses: actions/setup-node@v2
        with:
          node-version: "16"
          registry-url: "https://registry.npmjs.org"
      - run: npm publish --access public
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

You can now manually trigger this GitHub Action from the Actions tab on the GiHub Repo, specifying whether you should bump a patch, minor, or major version of your package.
