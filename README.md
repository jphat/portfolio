# Astro Portfolio

```sh
yarn install
```

## 🚀 Project Structure

Inside this portfolio project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   └── components/
│       └── Byline.astro
│       └── Card.astro
│       └── Codex.astro
│       └── Footer.astro
│       └── Hashtags.astro
│       └── Header.astro
│       └── Hero.astro
│       └── Media.astro
│       └── Pill.astro
│   └── content/
│       └── blog/
│           └── and-if-these-few-women-exist.mdx
│           └── not-mentioning-this-absurd-culture.mdx
│           └── respect-feminism-not-case-study-subjects.mdx
│       └── client/
│           └── images/
│               └── astro.png
│               └── tailwindcss.svg
│               └── typescript.png
│           └── astro.yml
│           └── tailwindcss.yml
│           └── typescript.yml
│       └── person/
|           └── images/
│               └── a-starlight.avif
│               └── s-apollo.avif
│           └── a-starlight.yml
│           └── s-apollo.yml
│       └── project/
│           └── creative-department-supposed-happy-diverse-environment.mdx
│           └── not-mentioning-this-absurd-culture.mdx
│       └── config.ts
│   └── layouts/
│       └── Article.astro
│       └── Landing.astro
│       └── Layout.astro
│   └── pages/
│       └── blog/
│           └── [...slug].astro
│           └── index.astro
│       └── hashtags/
│           └── [...hashtag].astro
│           └── index.astro
│       └── our-team/
│           └── [...id].astro
│           └── index.astro
│       └── projects/
│           └── [...slug].astro
│           └── index.astro
│       └── 404.astro
│       └── index.astro
│   └── schemas/
│       └── Blog.ts
│       └── Client.ts
│       └── Person.ts
│       └── Project.ts
│   └── styles/
│       └── partials/
│           └── _card.scss
│           └── _figure.scss
│           └── _layout.scss
│           └── _type.scss
│       └── main.scss
│   └── types/
│       └── Hero.ts
│       └── Metadata.ts
│   └── utils/
│       └── getContent.ts
│       └── getHashtags.ts
│   └── config.ts
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                  | Action                                           |
| :----------------------- | :----------------------------------------------- |
| `yarn install`           | Installs dependencies                            |
| `yarn dev`               | Starts local dev server at `localhost:4321`      |
| `yarn build`             | Build your production site to `./dist/`          |
| `yarn preview`           | Preview your build locally, before deploying     |
| `yarn astro ...`         | Run CLI commands like `astro add`, `astro check` |
| `yarn astro -- --help`   | Get help using the Astro CLI                     |

## 👀 Want to learn more?
Feel free to check out the [blog post](https://josephat.me/blog/astro-portfolio-redux/) on how this portfolio was built. To learn more about Astro, check out [their documentation](https://docs.astro.build) or jump into their [Discord server](https://astro.build/chat).
