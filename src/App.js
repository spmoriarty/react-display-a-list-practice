import { useState } from 'react';
import Dog from './Dog';
import DogsList from './fetch-utils';


import './App.css';
// import your arrays here



function App() {
  
  const [dogList, setDogList] = useState([]);
  
  return (
    <div className="App">
      
      <Dog />

    </div>
  );
}

export default App;
