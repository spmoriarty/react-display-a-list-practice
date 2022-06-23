import React from 'react';

export default function FallList({ name, height, distance }) {
  return (
    <div className='falls' >
      <h2>{name}</h2>
      <p>Is at a height of {height} feet.</p>
      <p>and is a distance of {distance} from Portland</p>    
    </div>
  );
}

