
# [Personal site by Guy Livni](https://guylivni.github.io/)

My personal site.

## Table of contents

- [Motivation](#motivation)
- [Requirements](#requirements)
- [Getting started](#getting-started)
- [File Structure](#file-structure)
- [Scripts](#scripts)
- [What’s Included?](#whats-included)
- [Deploy](#deploy)
- [License](#license)

## Motivation

Sharing knowledge and my approach to topics such as theming, content management, structure and more.

## Requirements

*[node](https://nodejs.org/en/) >= 9.0
*[Yarn](https://yarnpkg.com/en/) >= 1.1

## Getting started

**1. Install all of the dependencies:**

```bash
yarn
```

**2. Start dev env:**

```bash
yarn start
```

## File Structure

```
.
├──  content               # assets and blog posts
├──  static                # favicon and robots
└── src
    ├── api                # API services
    ├── assets             # svg assets
    ├── components         # components divided per feature
    ├── constants
    ├── hooks              # React hooks
    ├── pages              # Site pages
    ├── services
    ├── styles             # Site themes and styles
    └── templates
```

## Scripts

In the project directory, you can run:

| `yarn <script>`    | Description                                                    |
| ------------------ | -------------------------------------------------------------- |
| `start`            | Run your app in development mode at `localhost:8000`.          |
| `lint`             | Runs lint check.                                               |
| `format`           | Runs prettier format on `src` folder                           |
| `build`            | Builds the app for production to the `public` folder.          |
| `serve`            | Serves the production ready app from the `public` folder.      |
| `deploy`           | Deploys app to github pages                                    |

## What’s Included?

- [Gatsby.js](https://github.com/gatsbyjs/gatsby) Build blazing fast, modern apps and websites with React [https://www.gatsbyjs.org](https://www.gatsbyjs.org/)

- [contentful](https://www.contentful.com/) for content management.

- [styled-components](https://github.com/styled-components/styled-components) as styling solution and theming

- [Husky](https://github.com/typicode/husky) for git hooks management.

- [commitlint](https://github.com/conventional-changelog/commitlint) for commit messages linting following [conventional-commits](https://www.conventionalcommits.org/) rules.

- [Prettier](https://github.com/prettier/prettier) an addition to ESlint code formatter.

- [ESLint](http://eslint.org/) to maintain a consistent javascript code style.

- [react-icons](https://github.com/react-icons/react-icons) for svg react icons of popular icon packs.

- [Dotenv](https://github.com/motdotla/dotenv) for environment variables managment.

- [prop-types](https://github.com/facebook/prop-types) as the runtime type checker.

- [Yarn](https://yarnpkg.com/lang/en/) as the package manager.

## Deploy

Site is deployed using [Github Pages](https://pages.github.com/).

## License

My-Site [licensed as MIT](https://github.com/GuyLivni/my-site/blob/master/LICENSE).