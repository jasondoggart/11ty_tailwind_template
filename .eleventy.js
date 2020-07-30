module.exports = (eleventyConfig) => {
  // Add a readable date formatter filter to Nunjucks
  eleventyConfig.addFilter("dateDisplay", require("./filters/dates.js"));

  // Add a HTML timestamp formatter filter to Nunjucks
  eleventyConfig.addFilter(
    "htmlDateDisplay",
    require("./filters/timestamp.js")
  );

  // Include our static assets
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("robots.txt");

  // Layout aliases
  eleventyConfig.addLayoutAlias("default", "layouts/default.njk");

  return {
    templateFormats: ["md", "njk", "html", "yml"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    passthroughFileCopy: true,

    dir: {
      input: "src",
      output: "dist",
      includes: "includes",
      data: "_data",
    },
  };
};
