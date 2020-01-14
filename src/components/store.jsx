import React, { Component } from "react";
import Pokemon from "./pokemon";

class Store extends Component {
  state = {};

  render() {
    return (
      <div>
        <ul className="list-group">
          {this.props.pokemonList.map(pokemon => (
            <li className="list-group-item">
              <Pokemon
                key={pokemon.id}
                numCandy={this.props.numCandy}
                pokemon={pokemon}
                version={this.props.version}
                starter={this.props.starter}
                onBuyClick={this.props.onBuyClick}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Store;
