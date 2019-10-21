# Contributing Workflow

## General Workflow

1. Checkout a namespaced branch from master
  - feat/...
  - fix/...
  - docs/...
  - refactor/...
  - style/...
  - test/...
  - chore/...
2. Make commits to your branch. Prefix each commit like so:
  - (feat) Add a new feature
  - (fix) Fix bug [Fixes #0]
  - (docs) Change documentation
  - (style) Change formatting, add missing semicolons, etc; no code change
  - (refactor) Refactor production code
  - (test) Add missing tests, refactor tests; no production code change
  - (chore) Update grunt tasks, etc; no production code change
3. When you've finished with your fix or feature, push the changes to the repository then submit a [pull request][]
   directly to master. Include a description of your changes.
4. Your pull request will be reviewed by the scrum masater. The point of code
   reviews is to help keep the codebase clean and of high quality and, equally
   as important, to help you grow as a programmer. If your code reviewer
   requests you make a change you don't understand, ask them why.
5. Fix any issues raised by the scrum master, and push your fixes as a single
   new commit.
6. Once the pull request has been reviewed, it will be merged by the scrum master. Do not merge your own commits.

## Detailed Workflow

### Checkout a namespaced branch from master

Your branch should follow this naming convention:
  - feat/...
  - fix/...
  - docs/...
  - refactor/...
  - style/...
  - test/...
  - chore/...

These commands will help you do this:

``` bash

# Creates your branch and brings you there
git checkout -b `your-branch-name`
```

### Make commits to your feature branch. 

Prefix each commit like so
  - (feat) Add a new feature
  - (fix) Fix bug [Fixes #0]
  - (docs) Change documentation
  - (style) Change formatting, add missing semicolons, etc; no code change
  - (refactor) Refactor production code
  - (test) Add missing tests, refactor tests; no production code change
  - (chore) Update grunt tasks, etc; no production code change

Make changes and commits on your branch, and make sure that you
only make changes that are relevant to this branch. If you find
yourself making unrelated changes, make a new branch for those
changes.

#### Commit Message Guidelines

- Commit messages should be written in the present tense; e.g. "Fix continuous
  integration script".
- The first line of your commit message should be a brief summary of what the
  commit changes. Aim for about 70 characters max. Remember: This is a summary,
  not a detailed description of everything that changed.
- If you want to explain the commit in more depth, following the first line should
  be a blank line and then a more detailed description of the commit. This can be
  as detailed as you want, so dig into details here and keep the first line short.
- Read more about making great commit messages here:
  http://karma-runner.github.io/0.8/dev/git-commit-msg.html

### Push your branch to the remote repository

Once you are done making changes and commiting everything, you can begin the process of getting
your code merged into the main repo. First step is to push your local branch by running this command
from your local repository:

```bash
git push origin `your-branch-name`
```

### Make a pull request

Make a clear pull request from your branch to the master
branch, detailing exactly what changes you made and what feature this
should add. The clearer your pull request is the faster you can get
your changes incorporated into this repo.

At least one other person MUST give your changes a code review, and once
they are satisfied they will merge your changes into upstream. Alternatively,
they may have some requested changes. You should make more commits to your
branch to fix these, then follow this process again from rebasing onwards.

Once you get back here, make a comment requesting further review and
someone will look at your code again. If they like it, it will get merged,
else, just repeat again.

Thanks for contributing!