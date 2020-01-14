import React, { Component } from "react";
import sprites from "./sprites";
import "./pokemon.css";
import rcimage from "../images/rarecandy.png";
import idmap from "./idmap";
import commarize from "./commarize";

class Pokemon extends Component {
  state = { stats: "" };

  getBuyClasses() {
    let classes = "btn btn-";
    classes +=
      this.props.numCandy < this.props.pokemon.cost ? "danger" : "success";
    classes += " m-2";
    return classes;
  }

  showStats = () => {
    if (this.props.pokemon.amount > 0) {
      const stats =
        "Each " +
        idmap(this.props.pokemon.id, this.props.version, this.props.starter)
          .name +
        " producing " +
        commarize(this.props.pokemon.cps, 1) +
        " cps (" +
        commarize(
          Number(
            (this.props.pokemon.amount * this.props.pokemon.cps)
              .toFixed(1)
              .replace(/\.?0+$/, ""),
            1
          )
        ) +
        " cps total).";
      this.setState({ stats });
    }
  };

  hideStats = () => {
    const stats = "";
    this.setState({ stats });
  };

  handleBuyClick = () => {
    if (this.props.numCandy >= this.props.pokemon.cost) {
      this.props.onBuyClick(this.props.pokemon);
      this.hideStats();
    }
  };

  generateTop = () => {
    const spr = (
      <img
        src={
          sprites.find(
            spr =>
              spr.num ===
              idmap(
                this.props.pokemon.id,
                this.props.version,
                this.props.starter
              ).num
          ).src
        }
        className="r"
      />
    );

    const sprHeight = sprites.find(
      spr =>
        spr.num ===
        idmap(this.props.pokemon.id, this.props.version, this.props.starter).num
    ).height;

    const sprName = idmap(
      this.props.pokemon.id,
      this.props.version,
      this.props.starter
    ).name;

    const topLine = (
      <div style={{ lineHeight: sprHeight, fontSize: "30px" }}>
        {sprName} {spr}
      </div>
    );
    return topLine;
  };

  render() {
    const { id, amount, cost, cps } = this.props.pokemon;

    return (
      <div onMouseEnter={this.showStats} onMouseLeave={this.hideStats}>
        {this.generateTop()}

        <span className="buy-amt-class">
          <span>
            <button
              className={this.getBuyClasses()}
              onClick={this.handleBuyClick}
            >
              {commarize(Number(cost.toFixed(0, 0)))}{" "}
              <img src={rcimage} height="25px" />
            </button>
          </span>
          <span className="badge badge-secondary m-2 r">{amount}</span>
        </span>
        <br />
        <span>{this.state.stats}</span>
      </div>
    );
  }
}

export default Pokemon;
