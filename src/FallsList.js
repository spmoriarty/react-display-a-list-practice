import React from 'react';
import FallList from './FallList';


export default function FallsList({ waterFalls }) {
  return (
    <div>
      {
        waterFalls.map((waterFall, i) => {
          return <div key={waterFall.name + i + waterFall.id}>
            <FallList {...waterFall}/>
          </div>;})
      }
           
    </div>);}

