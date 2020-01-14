import React, { Component } from "react";
import icons from "./icons";
import idmap from "./idmap";

class FarmPokemon extends Component {
  state = {};
  render() {
    return (
      <div>
        {this.props.pokemon.display.map(id => (
          <img
            src={
              icons.find(
                icn =>
                  icn.num ===
                  idmap(id, this.props.version, this.props.starter).num
              ).src
            }
          />
        ))}
      </div>
    );
  }
}

export default FarmPokemon;
