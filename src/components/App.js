import React, { useState } from 'react';
import '../styles/App.scss';
import data from '../data/pokeList.json';
import PokeList from './PokeList';

function App(props) {
  const [pokeData] = useState(data);
  const [favorites, setFavorites] = useState([]);

  const handleFavorite = (ev) => {
    const pokemon = ev.currentTarget.id;
    const selectedPokemon = pokeData.find(
      (element) => element.id === parseInt(pokemon)
    );
    if (favorites.includes(selectedPokemon)) {
      const newFavorites = favorites.filter(
        (favorite) => favorite.id !== selectedPokemon.id
      );
      setFavorites(newFavorites);
    } else {
      const newFavorites = [...favorites, selectedPokemon];
      setFavorites(newFavorites);
    }
  };
  return (
    <div className='App'>
      <PokeList
        data={pokeData}
        handleFavorite={handleFavorite}
        favorites={favorites}
      />
    </div>
  );
}

export default App;
