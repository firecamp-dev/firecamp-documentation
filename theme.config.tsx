import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  // faviconGlyph: "Fc",
  // banner: {
  //   key: "firecamp-web",
  //   text: "Firecamp web is launched"
  // },
  primaryHue: { dark: 196, light: 220 },
  logo: () => (
    <img src='/docs/fc-full-logo.svg' style={{ "height": "30px" }} />
  ),
  project: {
    link: 'https://github.com/firecampdev/firecamp',
  },
  chat: {
    link: 'https://discord.com/invite/8hRaqhK',
  },
  docsRepositoryBase: 'https://github.com/firecampdev/firecamp-documentation',
  footer: {
    text: 'Firecamp Inc',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Firecamp'
    }
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    // const url = 'https://my-app.com' + (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
    const url = `https://firecamp.io/docs` + asPath

    return (
      <>
        <link rel="shortcut icon" href="/docs/favicon.png" />
        <link rel="canonical" href={url} />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || 'The multi-protocol API Platform'} />
        <meta
          property="og:description"
          content={frontMatter.description || 'Firecamp - Test Rest, GraphQL, Websocket and SocketIO APIs in minutes'}
        />

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <title>Multi-protocol API development platform | Firecamp</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta name="description" content="Firecamp is an open source API platform for testing and developing Rest, GraphQL, WebSocket, SocketIO, and other APIs. It's a secure and cost-effective Postman alternative for teams" />
        <meta property="og:type" content="website" />

        <meta property="og:site_name" content="Firecamp" />
        {/* <meta property="og:description" content="Firecamp is an open-source API platform for testing and developing Rest, GraphQL, WebSocket, SocketIO, and other APIs. It's a secure and cost-effective Postman alternative for teams." /> */}
        <meta property="og:image" content="https://www.firecamp.io/assets/images/firecampOG.png" />
        <meta property="og:image:alt" content="" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Firecamp - Test Rest, GraphQL, Websocket and SocketIO APIs in minutes" />
        <meta name="twitter:description" content="Firecamp is an open-source API platform for testing and developing Rest, GraphQL, WebSocket, SocketIO, and other APIs. It's a secure and cost-effective Postman alternative for teams." />
        <meta name="twitter:site" content="https://www.firecamp.io/" />
        <meta name="twitter:image" content="https://www.firecamp.io/assets/images/firecampOG.png" />
        <meta name="twitter:creator" content="@firecampdev" />
      </>
    )
  }
}

export default config
