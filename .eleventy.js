// .eleventy.js
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "public": "/" }); // Copies contents of 'public' to root of '_site'

  // Make sure there isn't an older `eleventyConfig.addPassthroughCopy("public");` still in the file.
  // Only one primary method for 'public' should be active.

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    passthroughFileCopy: true,
    templateFormats: ["html", "njk", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};