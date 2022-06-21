
import React from 'react';
import Dog from './dogs.';


export default function DogsList({ dogs = [] }) {
  return (
    <div>
      {
        dogs.map((dog, i) => <Dog {...dog} key={dog.name + i + dog.id}/>)
      };
        
    </div>
  );

}
