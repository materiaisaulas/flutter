(function () {

  function componentPlugin(hook) {

    hook.beforeEach(function (markdown) {

      /* IMG + TEXTO */

      markdown = markdown.replace(
        /(?:^|\n):::imgtext\s*([^\n]*)\n([\s\S]*?):::/g,
        function (_, img, content) {

          img = img.trim()

          if (!img) {
            const lines = content.trim().split("\n")
            img = lines.shift()
            content = lines.join("\n")
          }

          return `
<div class="doc-image-text">

<img src="${img}">

<div class="doc-image-text-content">

${content}

</div>

</div>
`
        }
      )

      /* TIP */

      markdown = markdown.replace(
        /(?:^|\n):::tip\n([\s\S]*?):::/g,
        function (_, content) {

          return `
<div class="doc-tip">
💡 ${content}
</div>
`
        }
      )

      /* WARNING */

      markdown = markdown.replace(
        /(?:^|\n):::warning\n([\s\S]*?):::/g,
        function (_, content) {

          return `
<div class="doc-warning">
⚠️ ${content}
</div>
`
        }
      )

      /* INFO */

      markdown = markdown.replace(
        /(?:^|\n):::info\n([\s\S]*?):::/g,
        function (_, content) {

          return `
<div class="doc-info">
ℹ️ ${content}
</div>
`
        }
      )

      return markdown

    })

  }

  window.$docsify = window.$docsify || {}
  window.$docsify.plugins = [].concat(componentPlugin, window.$docsify.plugins || [])

})()