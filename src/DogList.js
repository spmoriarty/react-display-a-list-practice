
import React from 'react';
import Dog from './Dog';


export default function DogsList({ dogs }) {
  return (
    <div>
      {
        dogs.map((dog, i) => <div key={dog.name + i + dog.id}>
          <Dog {...dog} />
        </div>)
  
      };
        
    </div>
  );

}
