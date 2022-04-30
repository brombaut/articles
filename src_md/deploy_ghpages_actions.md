## Create GitHub Actions YAML file.

Will use James Ives' github-pages-deploy-action

```yml
# .github/workflows/gh_pages_deploy.yml
name: Build and Deploy
on:
  push:
    branches:
      - main
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout 🛎️
        uses: actions/checkout@v2.3.1

      - name: Install and Build 🔧 # This example project is built using 
      # npm and outputs the result to the 'build' folder. Replace with 
      # the commands required to build your project, or remove this step 
      # entirely if your site is pre-built.
        run: |
          npm install
          npm run lint
          npm run build

      - name: Deploy 🚀
        uses: JamesIves/github-pages-deploy-action@4.1.4
        with:
          branch: gh-pages # The branch the action should deploy to.
          folder: dist # The folder the action should deploy.
```

You can then navigate to your repositories `Settings` -> `Pages` where you can select that the `gh-pages` branch should be selected as the source for the GitHub Pages deployment.

## Handling multiple projects under the `<username>.github.io` domain
You can specify a project to be deployed to specific subfolders under your `<username>.github.io` domain. For example, I can add the following configuration to the `vue.config.js` file in a Vue project so that my application will be deployed at  https://brombaut.github.io/game-of-life/
```js
// vue.config.js
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/game-of-life/',
})
```

## Add any environment variables

**Note:** There is almost certainly a better way to do this. Should probably look into it at some point.

- 1. Add any key-value pairs as repository secrets in your repo's <b>Settings -> Secrets</b> page. I guess this only makes them available in the pipeline, but not available from the `process`, which is why you have to do the next step.
- 2. Add a `Create .env File` step before the `Install and Build` step

```yml
# .github/workflows/gh_pages_deploy.yml snippet
- name: Create .env File
  run: |
    touch .env
    echo API_KEY=${{ secrets.API_KEY }} >> .env
    echo AUTH_DOMAIN=${{ secrets.AUTH_DOMAIN }} >> .env
```

## References

- https://github.blog/2020-09-25-github-action-hero-james-ives-and-github-pages-deploy/
- https://github.com/JamesIves/github-pages-deploy-action
- https://github.com/marketplace/actions/deploy-to-github-pages
