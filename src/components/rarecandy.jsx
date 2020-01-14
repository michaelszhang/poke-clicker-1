import React, { Component } from "react";
import rcimage from "../images/rarecandy.png";
import "./rarecandy.css";
import commarize from "./commarize";

class RareCandy extends Component {
  state = {};

  formatPlural(value) {
    return value === 1 ? "candy" : "candies";
  }

  render() {
    return (
      <div>
        <div className="rc-class">
          {commarize(Number(this.props.numCandy.toFixed(0)), 0)} rare{" "}
          {this.formatPlural(this.props.numCandy.toFixed(0))}
        </div>
        <div className="cps-class">
          {commarize(Number(this.props.candyPerSecond.toFixed(1)), 1)}{" "}
          {this.formatPlural(this.props.candyPerSecond.toFixed(1))} per second
        </div>
        <button
          className="btn btn-light m-3"
          onClick={() => this.props.onCandyClick()}
        >
          <img src={rcimage} height="250px" />
        </button>
      </div>
    );
  }
}

export default RareCandy;
