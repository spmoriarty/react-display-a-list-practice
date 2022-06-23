import React from 'react';
import PostList from './PostList';

export default function PostsList({ posts }) {
  return (
    <div>
      {
        posts.map((post, i) => {
          return <div key={post.title + i + post.id}>
            <PostList {...post} />
          </div>;})
      } 
    </div>);
}

