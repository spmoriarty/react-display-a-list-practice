import { useState } from 'react';
import DogList from './DogList';
import dogsList from './fetch-utils';
import workShopFetch from './fetch-utils';
import WorkShop from './WorkShop';


import './App.css';
import { useEffect } from 'react';
// import your arrays here



function App() {
  
  const [doggoList, setDogList] = useState([]);
  const [isGettingDog, setIsGettingDog] = useState(false);
  const [shopList, setWorkShopList] = useState([]);
  const [workShop, isGetWorkShop] = useState(false);

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


  async function fetchWorkShops(){
    isGetWorkShop(true);
    const data = await workShopFetch();
    isGetWorkShop(false);
    setWorkShopList(data);
  }

  useEffect(() => {
    fetchWorkShops();
  },
  []);



  
  return (
    <><div className="App">
      {isGettingDog ? <h1>Doggos Incoming!</h1> :
        <DogList dogs={doggoList} />}<hr />
      
      {workShop ? <h1>Grabbing Classes</h1> : 
        <WorkShop workShop={shopList} />}
    </div></>

  );
}

export default App;
