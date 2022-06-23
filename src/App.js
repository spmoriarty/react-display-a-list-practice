import { useState, useEffect } from 'react';
import DogList from './DogList';
import dogsList from './fetch-utils';
import { workShopFetch } from './fetch-utils';
import WorkShopList from './workShopList';
import { fetchFalls } from './fetch-utils';
import FallsList from './FallsList';


import './App.css';

// import your arrays here



function App() {
  
  const [doggoList, setDogList] = useState([]);
  const [isGettingDog, setIsGettingDog] = useState(false);
  const [shopList, setWorkShopList] = useState([]);
  const [workShop, isGetWorkShop] = useState(false);
  const [fallList, setFallList] = useState([]);
  const [getFalls, setGetFalls] = useState(false);

  async function fetchDogsList(){
    setIsGettingDog(true);
    const data = await dogsList();
    setIsGettingDog(false);
    setDogList(data);

  }

  useEffect(() => {
    fetchDogsList();
  },
  []);


  
  useEffect(() => {
    async function fetchWorkShops(){
      isGetWorkShop(true);
      const data = await workShopFetch();
      isGetWorkShop(false);
      setWorkShopList(data);
    }
    fetchWorkShops();
  },
  []);

  useEffect(() => {
    async function grabFalls(){
      setGetFalls(true);
      const data = await fetchFalls();
      setGetFalls(false);
      setFallList(data);
    }
    grabFalls();
  },
  []);


  
  return (
    <><div className="App">
      {isGettingDog ? <h1>Doggos Incoming!</h1> :
        <DogList dogs={doggoList} />}<hr />
      
      {workShop ? <h1>Grabbing Classes</h1> : 
        <WorkShopList workShops={shopList} />}<hr />
      <div className='falls'>
        {getFalls ? <h1>WaterFalls</h1> : 
          <FallsList waterFalls={fallList} />}<hr />
      </div>
      <div className='post'>
        <h1>Challenges</h1>
      </div>
      
    </div></>

  );
}

export default App;
