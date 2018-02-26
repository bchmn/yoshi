# Contributing to wix-haste monorepo
Hey! Thanks for your interest in improving our build tool!

Please take a moment to review this document in order to make the contribution process easy and effective for everyone involved.

## Submitting an Issue
Please provide us with an issue in case you've found a bug, want a new feature, have an awesome idea, or there is something you want to discuss.

## Submitting a Pull Request
Good pull requests, such as patches, improvements, and new features, are a fantastic help. They should remain focused in scope and avoid containing unrelated commits.

Please **ask first** if somebody else is already working on this or the core developers think your feature is in-scope. Generally always have a related issue with discussions for whatever you are including.

## Folder Structure
Haste is a monorepo, meaning it is divided into independent sub-packages.
We're using [Lerna](https://github.com/lerna/lerna) for the repo management.

```
  ├── haste-task-* - private haste tasks
  └── haste-preset-yoshi - toolkit for yoshi's behavior
    ├── bin
    ├── config
    ├── debug
    ├── docs
    ├── src
    └── test
```

## Local Setup
1. Clone the repo `git clone git@github.com:wix-private/wix-haste.git`.
2. Run `npm run bootstrap` in the root wix-haste directory.

That's it, you're good to go.

To make changes inside of the toolkit (yoshi preset) just `cd haste-preset-yoshi`:

* `npm test` - Run yoshi's tests.
* `npm run build` - Run [eslint](https://eslint.org/) on all packages with the following [rules](https://github.com/wix-private/wix-haste/blob/master/haste-preset-yoshi/.eslintrc).
* `npm run test:watch` Run the tests using watch mode.

## Adding a new feature to the yoshi toolkit
1. Make sure the feature is tested.
2. Document it in [README.md](https://github.com/wix-private/wix-haste/blob/master/README.md)

## Publish a new version
The CI will automatically update the version if the build & test suite are passing, and the version on `package.json` is greater then the one on the registry.

Don't forget to go over the [CHANGELOG.md](https://github.com/wix-private/wix-haste/blob/master/CHANGELOG.md) and insert the version's changes.