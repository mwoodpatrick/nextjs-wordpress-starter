# Next.js WordPress Starter

WebdevStudios fork of the [official Next.js WordPress Example](https://github.com/vercel/next.js/tree/canary/examples/cms-wordpress). Used as a starter for headless WordPress projects.

👉  https://nextjs-wordpress-starter.vercel.app

<a href="https://webdevstudios.com/contact/"><img src="https://webdevstudios.com/wp-content/uploads/2018/04/wds-github-banner.png" alt="WebDevStudios. Your Success is Our Mission."></a>

## Table of Contents
  - [Preface](#preface)
  - [Frontend Development (Next.js)](#frontend-development-nextjs)
    - [Install Frontend](#install-frontend)
  - [Backend Info (WordPress)](#backend-info-wordpress)
  - [Workflow](#workflow)
    - [Git Workflow](#git-workflow)
    - [Deployments](#deployments)
    - [Git and hosting](#git-and-hosting)
    - [Credentials](#credentials)
  - [Contributing](#contributing)

---

## 🎓 Preface

You will need the following installed on your computer:

- [Node 12+](https://nodejs.org/en/)
- [NPM 6+](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

The following frontend technologies are used on this project:

- [Next.js](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)
- [PostCSS](https://postcss.org/)
- [PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)

The backend (WordPress) is running [WPGraphQL](https://github.com/wp-graphql/wp-graphql). So familiarity with writing [GraphQL](https://graphql.org/) queries is helpful, but not required.

---

## 🚀 Getting Started

The following instructions will standup a local install of the frontend (Next.js). It queries data from the backend (WordPress) via GraphQL. Authentication happens via environment variable `.env.local`.

**Clone the repo:**

```bash
git clone git@github.com:WebDevStudios/nextjs-wordpress-starter.git
```

**Install dependencies:**

```bash
yarn
```

**Create an environment variable file:**

```bash
cp .env.local.example .env.local
```

*The environment variable credentials are in: `1password --> Next.js Environment Variables`. Copy & paste those credentials into `.env.local`*

**Start the development server:**

```bash
yarn start
```
The frontend is now available at http://localhost:3000

---

## 🔧 WordPress Info (The Backend)

The backend is a vanilla WordPress install, hosted at [WP Engine](https://nextjs.wpengine.com) with the following plugins:

**Advanced Custom Fields Pro** - ACF handles custom post meta and [ACF Blocks](https://www.advancedcustomfields.com/resources/blocks/).

**reSmush.it Image Optimizer** - Keeps image sizes small by optimizing them on upload.

**WDS SSO** - Our internal single-sign on service.

**WP GraphQL** - GraphQL is installed and the endpoint is: `https://nextjs.wpengine.com/graphql`

**WP GraphiQL** - Use WP GraphiQL to build queries in the [WordPress Dashboard](https://nextjs.wpengine.com/wp-admin/admin.php?page=wp-graphiql%2Fwp-graphiql.php). Those queries can be copied and pasted right into [/lib/api.js](https://github.com/WebDevStudios/nextjs-wordpress-starter/blob/main/lib/api.js)

**WP GraphQL JWT** - Allows the frontend to talk to the backend via environment variable `.env.local`

**WP Migrate DB Pro** - Used for moving database and files between environments.

**There is no frontend for WordPress** - But it is running [wd_s](https://github.com/WebDevStudios/wd_s). wd_s houses `/acf-json` and other functions for building ACF Blocks. *If you try to view the WordPress frontend, you will be redirected back to the WordPress dashboard.*

---

## 💻 Workflow

Contributing to this project is a lot like any other WDS project...

### Local by Flywheel

There is an [Local export available](https://drive.google.com/file/d/1p0qvsf2OWSr0Wesl2rrxhwJxHW3JUAMg/view?usp=sharing). Simply import the `.zip` file and you can tinker with the WordPress backend.

### Deployments

[Vercel](https://vercel.com/webdevstudios/nextjs-wordpress-example) is connected to this repo and handles builds deployments:

### Branches

- `main` - auto deploys
- `Pull Requests` - deployment previews are automatically generated

### Git Workflow

1. Create a `feature` branch off `main`
2. Open a draft Pull Request on Github
3. When finished with your work, publish your PR, and assign to Lead Engineer for peer review
4. Vercel will create a deployment preview. It must pass and deploy successfully
4. After peer review, PR will be merged back into `main`
5. Repeat ♻️

### Credentials
- WordPress - 1password --> "Next.js on WPE"
- Environment Variable - 1password --> "Next.js Environment Variables"
- To view hosting dashboards, ping Greg

## 🙌🏻 Contributing

Your contributions and support tickets are welcome.
