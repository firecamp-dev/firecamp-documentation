import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  banner: {
    key: "firecamp-web",
    text: "Firecamp web is launched"
  },
  primaryHue: 28,
  logo: () => (
    <span>
      <img src='/docs/fc-full-logo.svg' style={{ "height": "30px" }} />
    </span>
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
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || 'Firecamp'} />
        <meta
          property="og:description"
          content={frontMatter.description || 'The multi-protocol API Platform'}
        />
      </>
    )
  }
}

export default config
