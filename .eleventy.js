module.exports = function(eleventyConfig) {
  // Return your Object options:
  return {
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      layouts: "_includes/_layouts",
    }
  }
};