module.exports = function(eleventyConfig) {
  // Return your Object options:
  return {
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "docs",
      includes: "_includes",
      layouts: "_includes/_layouts",
    }
  }
};