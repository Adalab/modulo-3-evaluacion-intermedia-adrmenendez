import React from 'react';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';

class PokeList extends React.Component {
  render() {
    return (
      <main>
        <h1>Mi lista de Pokemons</h1>
        <ul className='pokelist'>
          {this.props.data.map((pokemon) => {
            return (
              <li
                key={pokemon.id}
                id={pokemon.id}
                className={`pokelist_item ${
                  this.props.favorites.includes(pokemon) ? 'favorite' : ''
                }`}
                onClick={this.props.handleFavorite}
              >
                <Pokemon data={pokemon} favorites={this.props.favorites} />
              </li>
            );
          })}
        </ul>
      </main>
    );
  }
}

PokeList.propTypes = {
  data: PropTypes.array.isRequired,
  handleFavorite: PropTypes.func.isRequired,
};
export default PokeList;
