import React from 'react';

export default function PostList({ title, description, challenge }) {
  return (
    <div className='post'>
      <h2>The {challenge} challenge</h2>
      <p>Would you rather {title} or {description}</p>
    </div>
  );
}

