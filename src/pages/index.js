import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'
import Post from '../components/Post'
import { sortByDate } from '../utils'

export default function Home({ posts }) {
  return (
    <div>

      <Head>
        <title>Data Driven Developer</title>
        <meta property="twitter:image" content="<%= BASE_URL %>og.jpg" />
        <meta property='og:title' content='Blog on Machine Learning, AI and Optimization'/>
        <meta property='og:image' content='https://blog.alexberndt.com/og.jpg'/>
        <meta property='og:description' content='Some notes and ideas on machine learning, AI and the challenges they present in terms of scalability, productization and algorithm complexity.'/>
        <meta property='og:url' content='https://blog.alexberndt.com/'/>
        <meta property="og:type" content="website"/>

        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:domain" content="blog.alexberndt.com"/>
        <meta property="twitter:url" content="https://blog.alexberndt.com/"/>
        <meta name="twitter:title" content="Blog on Machine Learning, AI and Optimization"/>
        <meta name="twitter:description" content="Some notes and ideas on machine learning, AI and the challenges they present in terms of scalability, productization and algorithm complexity. "/>
        <meta name="twitter:image" content="https://blog.alexberndt.com/og.jpg"/>
      </Head>

      <div className='center'>
        Soon to be published! Stay tuned ...
      </div>

      <div className='posts'>
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>

    </div>
  )
}

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join('src/posts'))

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {

    // Create slug
    const slug = filename.replace('.md', '')

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('src/posts', filename),
      'utf-8'
    )

    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter,
    }
  })

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  }
}
