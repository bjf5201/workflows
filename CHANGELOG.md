# Changelog

## v2.0.0

[compare changes](https://github.com/bjf5201/workflows/compare/v1.1.0...v2.0.0)

### 🩹 Bug Fixes

- Fix commit SHA being cut off in steps in setup-env action ([1038e1f](https://github.com/bjf5201/workflows/commit/1038e1f))
- Change setup-env external action references to versions instead of SHAs ([be0f744](https://github.com/bjf5201/workflows/commit/be0f744))
- ⚠️  Workflows were calling old version of setup-env action ([eee1508](https://github.com/bjf5201/workflows/commit/eee1508))
- Fix setup-env action for local testing ([ffac411](https://github.com/bjf5201/workflows/commit/ffac411))
- Fix changelogen ref - change to using a tag instead of specific SHA ([5f72f2c](https://github.com/bjf5201/workflows/commit/5f72f2c))

### 💅 Refactors

- **deps:** Remove husky since complexity not worth the benefits ([52e6e27](https://github.com/bjf5201/workflows/commit/52e6e27))
- Remove temp testing files ([019c5ec](https://github.com/bjf5201/workflows/commit/019c5ec))
- Add commit SHAs back in place of plain version numbers ([227bf1e](https://github.com/bjf5201/workflows/commit/227bf1e))
- Refactor workflows/ci.yml to address improperly called input variables ([8f80167](https://github.com/bjf5201/workflows/commit/8f80167))
- Refactor changelogen command to use gh release & add my name ([6ab8cae](https://github.com/bjf5201/workflows/commit/6ab8cae))

### 📦 Build

- Add 'type: module' to package.json for proper js parsing ([66c4106](https://github.com/bjf5201/workflows/commit/66c4106))
- Add changelogen config file ([b6f3ec3](https://github.com/bjf5201/workflows/commit/b6f3ec3))

### 🏡 Chore

- Add personalized rules to commitlint config ([5e347ba](https://github.com/bjf5201/workflows/commit/5e347ba))
- Add dependabot configuration to project ([920ae8b](https://github.com/bjf5201/workflows/commit/920ae8b))

### ✅ Tests

- Add tests for ci and cd workflows ([8947bea](https://github.com/bjf5201/workflows/commit/8947bea))
- **ci:** Fix ci-test.yml permissions issue ([a1c394c](https://github.com/bjf5201/workflows/commit/a1c394c))
- Create test that only tests setup-env action ([6d2d857](https://github.com/bjf5201/workflows/commit/6d2d857))
- Testing setup-env action alone ([dcfa9cc](https://github.com/bjf5201/workflows/commit/dcfa9cc))
- Fix workflows/ci-test.yml to input static matrix.os and matrix.node ([4d50bf0](https://github.com/bjf5201/workflows/commit/4d50bf0))
- Fix ci-test.yml which didn't call required 'persist-credentials' input for ci.yml ([e7c547b](https://github.com/bjf5201/workflows/commit/e7c547b))
- ⚠️  Add content to repo that allows workflows to be tested ([3cd63fc](https://github.com/bjf5201/workflows/commit/3cd63fc))
- ⚠️  Add workflow_dispatch to `on` keyword for testing purposes ([414d641](https://github.com/bjf5201/workflows/commit/414d641))
- Fix mistake where the wrong quotation mark type was used in hello function ([dd271b3](https://github.com/bjf5201/workflows/commit/dd271b3))

### 🤖 CI

- Fix changelogen command to use only '--release' since '--bump --release' is redundant ([d8e8f8f](https://github.com/bjf5201/workflows/commit/d8e8f8f))
- Add more options to the ci workflow's 'test' job ([a074146](https://github.com/bjf5201/workflows/commit/a074146))
- Add commitlint + commitizen + husky to ensure conventional commits ([28403d9](https://github.com/bjf5201/workflows/commit/28403d9))

#### ⚠️ Breaking Changes

- ⚠️  Workflows were calling old version of setup-env action ([eee1508](https://github.com/bjf5201/workflows/commit/eee1508))
- ⚠️  Add content to repo that allows workflows to be tested ([3cd63fc](https://github.com/bjf5201/workflows/commit/3cd63fc))
- ⚠️  Add workflow_dispatch to `on` keyword for testing purposes ([414d641](https://github.com/bjf5201/workflows/commit/414d641))

## v1.1.0

[compare changes](https://github.com/bjf5201/workflows/compare/v1.0.2...v1.1.0)

### 🚀 Enhancements

- Create ci.yml workflow and config ([7543354](https://github.com/bjf5201/workflows/commit/7543354))
- Add cd.yml workflow to be used for releasing JS/TS packages ([6b83fcc](https://github.com/bjf5201/workflows/commit/6b83fcc))

### 💅 Refactors

- Switch the 'lint' and 'test' steps so that unit tests are done first ([f729463](https://github.com/bjf5201/workflows/commit/f729463))
- Pin changelogen to commit in Generate GitHub Changelog step ([8bd84b2](https://github.com/bjf5201/workflows/commit/8bd84b2))

### 📖 Documentation

- Add CHANGELOG.md ([6091501](https://github.com/bjf5201/workflows/commit/6091501))

### 🎨 Styles

- Fix extra blank line at EOF ([9dd09cc](https://github.com/bjf5201/workflows/commit/9dd09cc))

### ❤️ Contributors

- Bethany Fannin <contact@bethanyfannin.com>

## v1.0.2

[compare changes](https://github.com/bjf5201/workflows/compare/v1.0.2...v0.0.2)

### 🚀 Enhancements

- Create ci.yml workflow and config ([7543354](https://github.com/bjf5201/workflows/commit/7543354))

### 💅 Refactors

- Switch the 'lint' and 'test' steps so that unit tests are done first ([f729463](https://github.com/bjf5201/workflows/commit/f729463))

### ❤️ Contributors

- Bethany Fannin <contact@bethanyfannin.com>
