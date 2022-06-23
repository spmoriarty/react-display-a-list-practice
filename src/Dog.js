import React from 'react';

export default function Dog({ name, age, breed, description }) {
  return (
    <div className='doggo'>
      <h2>{name}</h2>
      <h3>Is a {breed}</h3>
      <p>that is {age} years old.</p>
      <p>{description}</p>
    </div>
  );
}

