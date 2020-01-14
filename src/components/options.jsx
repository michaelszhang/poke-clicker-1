import React, { Component } from "react";
import icons from "./icons";

class Options extends Component {
  state = {};

  getBlackClass = () => {
    return this.props.version === 0
      ? "btn btn-outline-dark active"
      : "btn btn-outline-dark";
  };

  getWhiteClass = () => {
    return this.props.version === 1
      ? "btn btn-outline-dark active"
      : "btn btn-outline-dark";
  };

  getSnivyClass = () => {
    return this.props.starter === 0
      ? "btn btn-outline-dark active"
      : "btn btn-outline-dark";
  };

  getTepigClass = () => {
    return this.props.starter === 1
      ? "btn btn-outline-dark active"
      : "btn btn-outline-dark";
  };

  getOshawottClass = () => {
    return this.props.starter === 2
      ? "btn btn-outline-dark active"
      : "btn btn-outline-dark";
  };

  render() {
    return (
      <div>
        <h5>Game Version</h5>
        <div class="btn-group btn-group-toggle" data-toggle="buttons">
          <label
            class={this.getBlackClass()}
            onClick={() => this.props.onVersionClick(0)}
          >
            Black
          </label>
          <label
            class={this.getWhiteClass()}
            onClick={() => this.props.onVersionClick(1)}
          >
            White
          </label>
        </div>
        <br />
        <br />
        <h5>Starter Pokémon</h5>
        <div class="btn-group btn-group-toggle" data-toggle="buttons">
          <label
            class={this.getSnivyClass()}
            onClick={() => this.props.onStarterClick(0)}
          >
            <img src={icons.find(icn => icn.num === 495).src} />
          </label>
          <label
            class={this.getTepigClass()}
            onClick={() => this.props.onStarterClick(1)}
          >
            <img src={icons.find(icn => icn.num === 498).src} />
          </label>
          <label
            class={this.getOshawottClass()}
            onClick={() => this.props.onStarterClick(2)}
          >
            <img src={icons.find(icn => icn.num === 501).src} />
          </label>
        </div>
        <div class="mt-4 mb-1">
          <small>PokéClicker v. 1.0</small>
        </div>
      </div>
    );
  }
}

export default Options;
