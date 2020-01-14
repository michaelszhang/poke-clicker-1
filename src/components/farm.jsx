import React, { Component } from "react";
import FarmPokemon from "./farmpokemon";

class Farm extends Component {
  state = {};

  generateItem = pokemon => {
    if (pokemon.amount > 0) {
      return (
        <li className="list-group-item">
          <FarmPokemon
            pokemon={pokemon}
            version={this.props.version}
            starter={this.props.starter}
          />
        </li>
      );
    }
  };

  render() {
    return (
      <div>
        <ul className="list-group">
          {this.props.pokemonList.map(pokemon => this.generateItem(pokemon))}
        </ul>
      </div>
    );
  }
}

export default Farm;
