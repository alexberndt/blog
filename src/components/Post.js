export default function Post({ post }) {
  return (

    <a href={`/blog/${post.slug}`}>
      <div className='card'>
        <img src={post.frontmatter.cover_image} alt='' />
        <h3 className='card-title'>{post.frontmatter.title}</h3>
        <p className='card-date'>{post.frontmatter.date}</p>
        <p className='card-excerpt'>{post.frontmatter.excerpt}</p>
      </div>
    </a>
  )
}
