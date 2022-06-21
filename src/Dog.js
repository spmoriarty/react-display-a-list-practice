import React from 'react';

export default function Dog({ name, age, breed, description }) {
  return (
    <div>
      <h2>{name}</h2>
      <h3>{breed}</h3>
      <p>{age}</p>
      <p>{description}</p>
    </div>
  );
}

