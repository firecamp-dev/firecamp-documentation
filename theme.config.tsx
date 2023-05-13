import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  head: (
    <head>
        <base href="/doc" target="_self">
    </head>
  ),
  logo: <span>Firecamp</span>,
  project: {
    link: 'https://github.com/firecamp-io/firecamp',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/firecamp-io/firecamp',
  footer: {
    text: 'Firecamp Inc',
  },
}

export default config
