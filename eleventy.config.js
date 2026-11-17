// Eleventy settings. Eleventy reads this file when you run `npm start` or
// `npm run build`.
//
// What a build does:
//   1. Read every page in src/ (.html and .md files; src/_includes/ is skipped)
//   2. Wrap each page in the layout named in its front matter
//   3. Write the finished HTML into _site/
//      src/about.html           -> _site/about/index.html           (/about/)
//      src/blog/hello-world.md  -> _site/blog/hello-world/index.html (/blog/hello-world/)
//   4. Copy the files listed below into _site/ unchanged

export default function (eleventyConfig) {
  // Files that are not pages: copy them into _site/ as they are
  eleventyConfig.addPassthroughCopy("src/style.css");
  eleventyConfig.addPassthroughCopy("src/script.js");
  eleventyConfig.addPassthroughCopy("src/resources");
  eleventyConfig.addPassthroughCopy("src/vendor");

  // A "filter" is a function you can call in a template with a | sign.
  // In post.html, "page.date | readableDate" calls this with page.date
  // and prints e.g. "15 November 2026".
  eleventyConfig.addFilter("readableDate", (date) =>
    new Date(date).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    }),
  );

  eleventyConfig.addFilter("isoDate", (date) =>
    new Date(date).toISOString().slice(0, 10),
  );

  return {
    // Let .html files use template syntax ({{ }} and {% %})
    htmlTemplateEngine: "njk",

    // Do NOT use template syntax in .md files, so code samples like
    // {{ message }} in a blog post show up exactly as written
    markdownTemplateEngine: false,

    dir: {
      input: "src", // where you edit
      output: "_site", // where the finished site is written (don't edit)
      // layouts and includes live in src/_includes/ (Eleventy's default)
    },
  };
}
