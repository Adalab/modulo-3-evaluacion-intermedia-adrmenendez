import React, { useState } from 'react';
import '../styles/App.scss';
import data from '../data/pokeList.json';
import PokeList from './PokeList';

function App(props) {
  const [pokeData, setPokeData] = useState(data);
  return (
    <div className='App'>
      <PokeList data={pokeData} />
    </div>
  );
}

export default App;
