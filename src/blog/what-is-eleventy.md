---
layout: post.html
tags: posts
title: What is Eleventy (11ty)?
date: 2026-11-19
---

Eleventy (11ty) is a lightweight static site generator based on JavaScript.
It takes your content files (like Markdown) and templates, and turns them into plain HTML files at build time.
Its layouts and includes let you write shared parts, like headers and footers, once and reuse them across pages.
It works similarly to Laravel's Blade templating, if you've ever used it, except Eleventy renders everything once at build time instead of on every request.

<!-- (see [SSR vs SSG](/blog/ssr-vs-ssg/)). -->

It's simple to use, lightweight, and fast, making it suitable for static site projects like landing pages, documentation, blogs, portfolios, and company information pages.
This portfolio website uses 11ty, for example.

## How does it work?

Imagine you want to build a simple static site, like a portfolio, documentation, or a company page. You might create an HTML file for each page, one by one.

```text
portfolio/
├── index.html
├── about.html
├── projects.html
└── contact.html
```

This is fine for a site with 4 or 5 pages. But what if the content keeps growing and you end up with 20+ pages?
Maintaining them becomes tedious, with a lot of repeated code across every HTML file.

With 11ty you can template them like this:

```text
portfolio/
├── src/
│   ├── _includes/
│   │   └── base.html
│   ├── index.html
│   └── projects.html
├── package.json
└── eleventy.config.js
```

By default, Eleventy reads files from the project root, so tell it to use the `src/` folder instead:

**eleventy.config.js**

```js
export default function (eleventyConfig) {
  return {
    dir: {
      input: 'src',
      output: '_site',
    },
  };
}
```

Then write the shared parts once, in a layout:

**src/\_includes/base.html**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>{% if title %}{{ title }} - {% endif %}Anis Romzi</title>

    <link rel="stylesheet" href="/style.css" />
  </head>

  <body>
    <main>{{ content | safe }}</main>
  </body>
</html>
```

`{{ content | safe }}` is where each page's content goes. The `safe` filter stops Eleventy from escaping the page's HTML, so it shows up as real tags instead of text.

Each page only needs its own content, plus a bit of front matter at the very top of the file to pick the layout:

**src/index.html**

```html
---
layout: base.html
title: Personal Portfolio
---

<div class="hero">
  <h1>Welcome!!</h1>
</div>
```

Now build the site:

```text
npx @11ty/eleventy
```

Eleventy writes the finished pages into the `_site/` folder. `src/index.html` becomes `_site/index.html`, a full HTML page with the layout filled in:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>Personal Portfolio - Anis Romzi</title>

    <link rel="stylesheet" href="/style.css" />
  </head>

  <body>
    <main>
      <div class="hero">
        <h1>Welcome!!</h1>
      </div>
    </main>
  </body>
</html>
```

See? You don't have to write the doctype, head, link, and body tags in every HTML file. Eleventy reuses them from the layout.

Finally, deploy the `_site` folder to your server or a static host like GitHub Pages, Netlify, or Vercel, and that's it!

For a more detailed guide, visit the 11ty documentation: [https://www.11ty.dev/](https://www.11ty.dev/).
