import { useState } from 'react';
import DogList from './DogList';
import dogsList from './fetch-utils';


import './App.css';
import { useEffect } from 'react';
// import your arrays here



function App() {
  
  const [doggoList, setDogList] = useState([]);
  const [isGettingDog, setIsGettingDog] = useState(false);
  

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
  
  return (
    <div className="App">
      {
        isGettingDog ? <h1>Doggos Incoming!</h1> :
          <DogList dogs={doggoList}/>
      }
    </div>
  );
}

export default App;
