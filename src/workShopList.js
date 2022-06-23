import React from 'react';
import WorkShop from './WorkShop';

export default function WorkShopList({ workShops }) {
  return (
    <div>
      {
        workShops.map((workShop, i) => {
          return <div key={workShop.name + i + workShop.id}>
            <WorkShop {...workShop} />
          </div>;})
      }
    </div>
  );
}

