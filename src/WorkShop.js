import React from 'react';

export default function WorkShop({ name, instructor, days }) {
  return (
    <div className='workShop'>WorkShops
      <h2>{name}</h2>
      <h3>{instructor}</h3>
      <p>{days}</p>
    </div>
  );
}
