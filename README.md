# Vue Template

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## 👨‍💻 Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/)
- [VS Code Extension - Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar): This is an extension pack for vue projects. Including typescript, dotenv, sass, prettier, intellisense and snippets support.
- [VS Code Extension - EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig): This plugin attempts to override user/workspace settings with settings found in `.editorconfig` file.
- [VS Code Extension - Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode): This is an opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules.

These extensions are configured to be recommended to the user in the first use. You can see the recommended extensions running `Show Recommended Extensions` from VS Code's command palette,

## 📦 Dev Environment

- `node` version **16.14.2** the active LTS
- `npm` version **8.5.0**

## ⚡️ Features

- [Vue 3](https://github.com/vuejs/vue-core)

- [Vite 2](https://github.com/vitejs/vite) - With [alias `@`](https://vitejs.dev/config/#resolve-alias) and [`.env` support](https://vitejs.dev/guide/env-and-mode.html#env-files).

- [Pinia](https://pinia.esm.dev/) - State Management

- [Custom Style](./src/styles/) - Custom styling based on ITCSS and BEM.

- [TypeScript](https://www.typescriptlang.org/)

- E2E Testing with [Cypress](https://docs.cypress.io/guides/component-testing/introduction)

- Unit Testing with [Cypress](https://docs.cypress.io/guides/references/assertions)

- Component Testing with [Cypress](https://docs.cypress.io/guides/component-testing/introduction)

## ⚙️ TODO

- [Layout system](./src/layouts/)

- [Font Awesome Icons](https://fontawesome.com/)

- [Vue i18n for Vue 3](https://github.com/intlify/vue-i18n-next)

- [Vue Router](https://github.com/vuejs/vue-router)

## ✒️ Code Styling

- [`<script setup>` SFC syntax](https://vuejs.org/api/sfc-script-setup.html) is a compile-time syntactic sugar for using Composition API inside SFCs.

- [Composition API](https://vuejs.org/guide/extras/composition-api-faq.html) API set that allow create components using features like [Reactivity API](https://vuejs.org/api/reactivity-core.html), [Lifecycle Hooks](https://vuejs.org/api/composition-api-lifecycle.html) and [Dependency Injection](https://vuejs.org/api/composition-api-dependency-injection.html).

- [ESLint rules](https://eslint.org/) is a tool for identifying and reporting on pattern found in the code, with the goal of making code more consistent and avoid bugs. Here are the rules used for this project:

  - [eslint](https://eslint.org/docs/rules/) - `eslint:recommended`

  - [eslint-plugin-vue](https://eslint.vuejs.org/rules/) - `plugin:vue/vue3-recommended`

  - [eslint-plugin-cypress](https://github.com/cypress-io/eslint-plugin-cypress) - `plugin:cypress/recommended`

  - [eslint-typescript](https://typescript-eslint.io/rules/) - `plugin:@typescript-eslint/recommended`

## 🦾 Automation

- [Git Hooks with Husky](https://github.com/typicode/husky)

  - pre-commit - run [`lint-staged`](https://github.com/okonet/lint-staged) check
  - commit-msg - run [`commitlint`](https://github.com/conventional-changelog/commitlint) check
  - pre-push - run test script

- [Prettier](https://github.com/prettier/prettier/) - is an opinionated code formatter.

  - Auto formatter code on save using [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)

- NPM Scripts
  - `dev` - run vue project in development mode.
  - `build` - build vue project.
  - `preview` - preview the project.
  - `lint` - run linter without fix argument.
  - `lint:fix` - run linter with fix argument.
  - `test:unit` - run cypress for testing components.
  - `test:e2e` - run cypress for testing e2e features.
  - `test` - run both tests (unit and e2e).
  - `cy:ct` - open cypress for testing components.
  - `cy` - open cypress for testing e2e features.

## 💅 CSS Architecture

### ITCSS

The Inverted Triangle CSS (ITCSS) is a layered way of splitting CSS properties based on their level of specificity and importance created by Harry Roberts.

### BEM

The Block, Element, Modifier (BEM) is a highly useful, powerful, and simple naming convention that makes your front-end code easier to read and understand, easier to work with, easier to scale, more robust and explicit, and a lot more strict.

### File Structure

In order to organize the CSS files in the project, we’ll use layers to separate our codebase.

![CSS Structure](./.docs/css-structure.png)

#### Settings

This is where global variables are defined like colors, fonts, etc. It can be accessed from anywhere. It does not generate CSS.

#### Tools

This is where global mixins and functions are defined. For example: mixins for media queries, animations, etc. It can be accessed from anywhere. It does not generate CSS.

#### Generic

This layer contains styles such as reset and/or normalize and box-sizing definition. This layer generates CSS that affects much of the DOM.

#### Elements

This layer contains HTML elements without class. This layer generates CSS that slightly affects the DOM.

#### Components

This layer holds the style for all your custom components and/or third party components. This layer generates CSS for a component that only affects that component.

#### Utilities

This is where utility and helper styles are defined. This layer generates CSS that can override settings coming from other layers, this is the only place where !important is permitted.

## 📌 Notes

### Commitlint Format

```
type(scope?): subject
```

#### `type`

- Descibes the category of your change.
- Commonly used: build, chore, ci, docs, feat, fix, perf, refactor, revert, style, test.

#### `scope`

- Optional argument.
- Describes the module affected by your change.
- Highly project specific.
- Commonly used: back, front, etc.

#### `subject`

- Terse description.
- Avoid repeating information from type and scope.
- Describe what the software does after your change.

#### Examples

```
chore: run tests on travis ci

fix(server): send cors headers
```

### Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).
