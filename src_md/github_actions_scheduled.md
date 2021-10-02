## Create a scheduled GitHub Actions YAML file.

You can schedule a workflow to run at specific UTC times using POSIX cron syntax. Scheduled workflows run on the latest commit on the default or base branch. The shortest interval you can run scheduled workflows is once every 5 minutes.

This example triggers the workflow every day at 5:30 and 17:30 UTC:

```yml
# .github/workflows/scheduled_action.yml
name: Translate Goodreads to F3
on:
  schedule:
    # * is a special character in YAML so you have to quote this string
    - cron: "30 5,17 * * *"

jobs:
  goodreads_f3_translator:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-python@v2
        with:
          python-version: "3.x" # Version range or exact version of a Python version to use, using SemVer's version range syntax
          architecture: "x64" # optional x64 or x86. Defaults to x64 if not specified
      - uses: actions/setup-node@v2
        with:
          node-version: "16"
      - uses: BSFishy/pip-action@v1
        with:
          requirements: requirements.txt
      - name: NPM Clean Install
        run: npm ci
      - name: Run goodreads_translator.py
        run: python goodreads_translator.py
      - name: Run F3 Syncer
        run: |
          npm run build
          npm run start
```

Cron syntax has five fields separated by a space, and each field represents a unit of time.

```bash
┌───────────── minute (0 - 59)
│ ┌───────────── hour (0 - 23)
│ │ ┌───────────── day of the month (1 - 31)
│ │ │ ┌───────────── month (1 - 12 or JAN-DEC)
│ │ │ │ ┌───────────── day of the week (0 - 6 or SUN-SAT)
│ │ │ │ │
│ │ │ │ │
│ │ │ │ │
* * * * *
```

Information on notifications for scheduled actions can be found at [https://docs.github.com/en/actions/automating-builds-and-tests/about-continuous-integration#notifications-for-workflow-runs](https://docs.github.com/en/actions/automating-builds-and-tests/about-continuous-integration#notifications-for-workflow-runs)

All information gathered at [https://docs.github.com/en/actions/learn-github-actions/events-that-trigger-workflows](https://docs.github.com/en/actions/learn-github-actions/events-that-trigger-workflows).

Other helpful references

- No assurance on scheduled jobs: [https://github.community/t/no-assurance-on-scheduled-jobs/133753](https://github.community/t/no-assurance-on-scheduled-jobs/133753)
- GitHub Actions workflow not triggering at scheduled time: [https://upptime.js.org/blog/2021/01/22/github-actions-schedule-not-working/](https://upptime.js.org/blog/2021/01/22/github-actions-schedule-not-working/)
