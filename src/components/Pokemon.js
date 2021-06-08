import React from 'react';

class Pokemon extends React.Component {
  render() {
    const pokemon = this.props.data;

    return (
      <>
        <img
          src={pokemon.url}
          alt={pokemon.name}
          className='pokelist_item--img'
        />
        <h2 className='pokelist_item--name'>{pokemon.name}</h2>
        <ul className='pokelist_item--powers'>
          {pokemon.types.map((type, index) => {
            return <li key={index}>{type}</li>;
          })}
        </ul>
      </>
    );
  }
}

export default Pokemon;
