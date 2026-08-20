import { PostCard } from 'nextra-theme-blog'
import { getPosts, getTags } from '../../posts/get-posts'

type PageProps = {
  params: Promise<{ tag: string }>
}

export async function generateMetadata(props: PageProps) {
  const params = await props.params
  return {
    title: `“${decodeURIComponent(params.tag)}” 标签下的文章`,
  }
}

export async function generateStaticParams() {
  const allTags = await getTags()
  return [...new Set(allTags)].map(tag => ({ tag }))
}

export default async function TagPage(props: PageProps) {
  const params = await props.params
  const tag = decodeURIComponent(params.tag)
  const posts = await getPosts()
  return (
    <>
      <h1>{tag}</h1>
      {posts
        .filter(post => post.frontMatter.tags.includes(tag))
        .map(post => (
          <PostCard key={post.route} post={post} />
        ))}
    </>
  )
}