import { Footer, Layout, Navbar, ThemeSwitch } from 'nextra-theme-blog'
import { Banner, Head, Search } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import type { ReactNode } from 'react'
import 'nextra-theme-blog/style.css'

export const metadata = {
  title: 'tisou1 的博客',
  description: '技术踩坑、思考与总结',
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  const banner = (
    <Banner storageKey="blog-banner">
      欢迎来到 tisou1 的博客 🎉
    </Banner>
  )

  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <Head backgroundColor={{ dark: '#0f172a', light: '#fefce8' }} />
      <body>
        <Layout banner={banner}>
          <Navbar pageMap={await getPageMap()}>
            <Search />
            <ThemeSwitch />
          </Navbar>

          {children}

          <Footer>
            <abbr
              title="本网站及其所有内容采用知识共享署名-非商业性使用 4.0 国际许可协议授权。"
              style={{ cursor: 'help' }}
            >
              CC BY-NC 4.0
            </abbr>{' '}
            {new Date().getFullYear()} © tisou1.
            <a href="/rss.xml" style={{ float: 'right' }}>
              RSS
            </a>
          </Footer>
        </Layout>
      </body>
    </html>
  )
}