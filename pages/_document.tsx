import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="title" content="WebGL and CSS" />
        <meta name="description" content="2d3d dev" />
        <meta name="description" content="curated list of webgl" />
        <meta name="keywords" content="webgl, css, list, curated, threejs, p5js, shader" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="WebGL and CSS" />
        <meta property="og:description" content="curated list of web graphics" />
        <meta property="og:url" content="https://webgldev.github.io/2d3d" />
        <meta property="og:image" content="/image/web.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://webgldev.github.io/2d3d" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
