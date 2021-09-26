## Install [Codecov](https://www.npmjs.com/package/codecov)

```bash
npm install codecov --save-dev
```

## Get Codecov Token for Repo

Navigate directly to the specific repository using:
`https://codecov.io/<repo-provider>/<account-name>/<repo-name>`

E.g., https://app.codecov.io/gh/brombaut/article-scraper

## Uploading From Local Machine

Run the following command on your local machine to upload local coverage statistics:

```bash
./node_modules/.bin/codecov --token=<your_repo_token>
```

## Uploading From GitHub Actions

```yml
# .github/workflows/publish_codecov.yml
name: Publish coverage results to Codecov
on: workflow_dispatch

jobs:
  publish_to_npm:
    runs-on: ubuntu-latest
    steps:
      - name: Upload coverage to Codecov
        uses: codecov/codecov-action@v1
        with:
          token: ${{ secrets.CODECOV_TOKEN }}
```

## Adding Repository Badge

The following markdown provides an example for how to add a badge to a README file for CodeCov.

```bash
[![Codecov](https://img.shields.io/codecov/c/github/brombaut/article-scraper)](https://app.codecov.io/gh/brombaut/article-scraper)
```

## References

- [https://docs.codecov.com/docs/quick-start](https://docs.codecov.com/docs/quick-start)
