import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'
import Link from 'next/link'

export default function PostPage({frontmatter: { title, date, cover_image, author, cover_image_caption }, slug, content}) {
  return (
    <div className="single-post">
      <Link href='/' className='btn btn-back'>Back</Link>
      <div className='card card-page'>
        <h1 className='post-title'>{title}</h1>
        <p className='post-author-date'>{date}</p> 
        {/* {author} •  */}
        <img className='post-image' src={cover_image} alt='' />
        <div className='post-image-caption'>{cover_image_caption}</div>
        <div className='post-body'>
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('src/posts'))
  const paths = files.map((filename) => ({params: {slug: filename.replace('.md', '')}}))
  return {paths, fallback: false}
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(path.join('src/posts', slug + '.md'), 'utf-8')
  const { data: frontmatter, content } = matter(markdownWithMeta)
  return {props: {frontmatter, slug, content}}
}
