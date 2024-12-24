import React from 'react'
import { posts } from '@/data/posts'

const PostsPage = () => {
  return (
    <div>
      <h2>블로그 목록</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <span>{post.createdAt}</span>
        </div>
      ))}
      
    </div>
  )
}

export default PostsPage