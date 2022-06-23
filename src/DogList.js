
import React from 'react';
import Dog from './Dog';


export default function DogsList({ dogs }) {
  return (
    <div>
      {
        dogs.map((dog, i) => <div key={dog.name + i + dog.id}>
          <Dog {...dog} />
          <h2>{dog.name}</h2>
          <p>{dog.age}</p>
          <p>{dog.breed}</p>
        </div>)
  
      };
        
    </div>
  );

}
