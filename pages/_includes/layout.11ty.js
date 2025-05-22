export function render(data) {
  return `
    <!doctype html>
    <html lang="${data.lang}">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${data.title}</title>
        <meta name="og:title" content="${data.title}">
        <meta name="og:description" content="${data.description}">
        <meta name="og:image" content="https://yamanoku.net/tskaigi-2025/images/slide-01.png">
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:site" content="@yamanoku">
        <meta name="twitter:image:alt" content="${data.title} 2025-05-23 TSKaigi 2025">
        <meta property="og:locale" content="${data.lang}">
        <link rel="stylesheet" href="https://cdn.skypack.dev/yama-normalize">
        <script src="https://unpkg.com/@highlightjs/cdn-assets@11.6.0/highlight.min.js"></script>
        <link rel="stylesheet" href="https://unpkg.com/@highlightjs/cdn-assets@11.6.0/styles/a11y-dark.min.css">
        <script type="module">hljs.initHighlightingOnLoad()</script>
        <style>code{font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;font-size:1em;}pre code.hljs{padding:calc(var(--rhythm)*3);}footer{padding: var(--y-rhythm-3);text-align: center;}</style>
      </head>
      <body>
        <main id="main">
          <hgroup>
            <h1 style="margin-block-end: 0">${this.budoux(data.title)}</h1>
            <p style="font-size: 1.425rem">${this.budoux(data.subtitle)}</p>
          </hgroup>
          ${data.content}
        </main>
        <footer>
          <p>Copyright ${this.year()}, Okuto Oyama</p>
          <p>Source : <a href="https://github.com/yamanoku/document-page-template/" target="_blank">yamanoku/document-page-template</a></p>
        </footer>
      </body>
    </html>
  `;
};
