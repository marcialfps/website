# Personal Website - Marcial F

## What is this project?

This is my personal portfolio website showcasing my professional experience as a full-stack engineer, volunteer work with European Youth Press, education, technical skills, and projects. The site serves as a digital resume and portfolio to present my work in software development, web design, and community engagement.

## Technologies

- **Astro** - Static site generator for fast, content-focused websites
- **TailwindCSS** - Utility-first CSS framework for styling
- **GitHub Actions** - CI/CD pipeline for automated deployments
- **AWS** - Cloud hosting infrastructure

## Why Astro?

Astro was chosen for this project because:
- **Performance-first**: Ships zero JavaScript by default, resulting in faster page loads
- **Content-focused**: Perfect for portfolio and blog content
- **Component flexibility**: Supports multiple frameworks and allows using `.astro` components
- **Built-in optimizations**: Automatic image optimization and asset handling
- **Developer experience**: Simple, intuitive syntax with excellent TypeScript support


## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |
