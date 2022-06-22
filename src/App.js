import { useState } from 'react';
import Dog from './Dog';
import dogsList from './fetch-utils';


import './App.css';
import { useEffect } from 'react';
// import your arrays here



function App() {
  
  const [dogList, setDogList] = useState([]);
  const [isGettingDog, setIsGettingDog] = useState(false);

  async function fetchDogsList(){
    setIsGettingDog(true);
    const data = await dogsList();
    setIsGettingDog(false);

  }

  useEffect(() => {
    fetchDogsList();
  },);
  
  return (
    <div className="App">
      
      <Dog dogList={dogList} />

    </div>
  );
}

export default App;
