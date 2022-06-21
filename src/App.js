import { useState } from 'react';
import DogList from './DogList';


import './App.css';
// import your arrays here



function App() {
  
  const [dogList, setDogList] = useState([]);
  
  return (
    <div className="App">
      
      <DogList />

    </div>
  );
}

export default App;
