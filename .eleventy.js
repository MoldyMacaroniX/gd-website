module.exports = (config) => {

  config.addPassthroughCopy('assets'); // CSS, JS, etc.

  config.setDataDeepMerge(true);

  config.addFilter('getAuthor', require('./lib/filters/getAuthor'));
  config.addFilter('getAuthorPosts', require('./lib/filters/getAuthorPosts'));
  config.addFilter('readableDate', require('./lib/filters/readableDate'));

  config.addCollection('posts', require('./lib/collections/posts'));
  config.addCollection('tagList', require('./lib/collections/tagList'));
  config.addCollection('pagedPosts', require('./lib/collections/pagedPosts'));
  config.addCollection('pagedPostsByTag', require('./lib/collections/pagedPostsByTag'));

  // Get the first `n` elements of a collection.
  config.addFilter("head", (array, n) => {
    if(!Array.isArray(array) || array.length === 0) {
      return [];
    }
    if( n < 0 ) {
      return array.slice(n);
    }

    return array.slice(0, n);
  });

  config.addPairedShortcode("video", function(content) {
    return `
<div class="video-iframe">
  ${content}
</div>
    `;
  });

  config.addPairedShortcode("details", function(content, title) {
    return `
<details>
  <summary><span class="details-summary"><span class="details-title">${title}</span><span class="ri-add-line details-icon"></span></span></summary>
  ${content}
</details>
    `;
  });

  config.addPairedShortcode("alert", function(content) {
    return `
<div class="alert">
  ${content}
</div>
    `;
  });

  return {
    dir: {
      input: 'src',
      output: '_site'
    },
    // pathPrefix: "/subfolder/",
    templateFormats: ['md', 'njk', 'html'],
    dataTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk'
  };
};