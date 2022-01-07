const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Return your Object options:

  eleventyConfig.addCollection("blog", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./src/blog/content/*.md");
  });

  eleventyConfig.addCollection("recentPosts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./src/blog/content/*.md").reverse().slice(0, 3);
  });

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_FULL);
  });
  
  return {
    htmlTemplateEngine: "njk",
    pathPrefix: "https://joelamyman.github.io/11ty-github-pages-test/",
    dir: {
      input: "src",
      output: "docs",
      includes: "_includes",
      layouts: "_includes/_layouts",
    }
  }
};