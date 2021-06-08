import React from 'react';
import Pokemon from './Pokemon';

class PokeList extends React.Component {
  render() {
    return (
      <ul className='pokelist'>
        {this.props.data.map((pokemon) => {
          return (
            <li key={pokemon.id} className='pokelist_item'>
              <Pokemon data={pokemon} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default PokeList;
