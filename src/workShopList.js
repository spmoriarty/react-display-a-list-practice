import React from 'react';
import WorkShop from './WorkShop';

export default function workShopList({ workShops }) {
  return (
    <div>
      {
        workShops.map((workShop, i) => <div key={workShop.name + i + workShop.id}>
          <WorkShop {...workShop} />
        </div>)
      }
    </div>
  );
}

