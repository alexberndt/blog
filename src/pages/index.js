import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'
import Post from '../components/Post'
import { sortByDate } from '../utils'
import { siteName, siteDescription, siteUrl, ogImageUrl } from '../utils/constants'

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Blog</title>
        <meta property="twitter:image" content={ogImageUrl} />
        <meta property="og:title" content={siteName} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="blog.alexberndt.com" />
        <meta property="twitter:url" content={siteUrl} />
        <meta name="twitter:title" content={siteName} />
        <meta name="twitter:description" content={siteDescription} />
        <meta name="twitter:image" content={ogImageUrl} />
      </Head>

      <div className="posts">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('src/posts'))

  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '')
    const markdownWithMeta = fs.readFileSync(path.join('src/posts', filename), 'utf-8')
    const { data: frontmatter } = matter(markdownWithMeta)
    return { slug, frontmatter }
  })

  return { props: { posts: posts.sort(sortByDate) } }
}
