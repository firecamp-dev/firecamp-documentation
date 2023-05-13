const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx'
})

module.exports = withNextra({
  basePath: '/doc',
  redirects: () => [
    {
      source: "/",
      destination: "/doc/",
      basePath: false,
      permanent: true
    }
  ]
})
