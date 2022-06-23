import React from 'react';

export default function workShop({ name, instructor, days }) {
  return (
    <div className='workShop'>
      <h2>{instructor}</h2>
      <h3>{name}</h3>
      <p>{days}</p>
    </div>
  );
}
