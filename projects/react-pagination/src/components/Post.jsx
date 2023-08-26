import './Post.css'

export const Post = ({ post }) => {
  const { title, description } = post
  return (
    <div className='post-card'>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}
