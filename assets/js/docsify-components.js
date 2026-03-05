(function () {
  function componentPlugin(hook) {
    hook.beforeEach(
      function (markdown) {
        markdown = markdown.replace(
          /:::imgtext\s+(.*?)\n([\s\S]*?):::/g,
          function (_, img, content) {
            return `
<div class="doc-image-text">

<img src="${img}">

<div class="doc-image-text-content">

${content}

</div>

</div>
`;
          },
        );

        markdown = markdown.replace(
          /:::tip\n([\s\S]*?):::/g,
          function (_, content) {
            return `
<div class="doc-tip">

💡 ${content}

</div>
`;
          },
        );

        markdown = markdown.replace(
          /:::warning\n([\s\S]*?):::/g,
          function (_, content) {
            return `
<div class="doc-warning">

⚠️ ${content}

</div>
`;
          },
        );

        markdown = markdown.replace(
          /:::info\n([\s\S]*?):::/g,
          function (_, content) {
            return `
<div class="doc-info">

ℹ️ ${content}

</div>
`;
          },
        );

        return markdown;
      },
    );
  }

  window.$docsify =
    window.$docsify || {};
  window.$docsify.plugins = [].concat(
    componentPlugin,
    window.$docsify.plugins || [],
  );
})();
