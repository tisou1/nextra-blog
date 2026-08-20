import nextra from 'nextra'

// Set up Nextra with its configuration
const withNextra = nextra({
  defaultShowCopyCode: true,
  readingTime: true,
})

export default withNextra({
  reactStrictMode: true,
  cleanDistDir: true,
  turbopack: {
    resolveAlias: {
      // Required for Turbopack, see https://nextra.site/docs/file-conventions/mdx-components-file
      'next-mdx-import-source-file': './mdx-components.tsx',
    },
  },
})
