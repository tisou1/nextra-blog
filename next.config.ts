import nextra from 'nextra'

// Set up Nextra with its configuration
const withNextra = nextra({
  defaultShowCopyCode: true,
  readingTime: true,
})

export default withNextra({
  reactStrictMode: true,
  cleanDistDir: true,
})
