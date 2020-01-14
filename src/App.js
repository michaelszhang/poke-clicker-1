import React, { Component } from "react";
import "./App.css";
import RareCandy from "./components/rarecandy";
import Store from "./components/store";
import Farm from "./components/farm";
import Options from "./components/options";
import SimpleCrypto from "simple-crypto-js";

class App extends Component {
  state = {
    numCandy: 0.0,
    candyPerSecond: 0.0,
    pokemonList: [
      { id: 1, amount: 0, cost: 10, cps: 0.1, display: [] },
      { id: 2, amount: 0, cost: 120, cps: 0.8, display: [] },
      { id: 3, amount: 0, cost: 1440, cps: 6.4, display: [] },
      { id: 4, amount: 0, cost: 10000, cps: 38.4, display: [] },
      { id: 5, amount: 0, cost: 120000, cps: 307.2, display: [] },
      { id: 6, amount: 0, cost: 1440000, cps: 2457.6, display: [] },
      { id: 7, amount: 0, cost: 10000000, cps: 14745.6, display: [] },
      { id: 8, amount: 0, cost: 120000000, cps: 117964.8, display: [] },
      { id: 9, amount: 0, cost: 1440000000, cps: 943718.4, display: [] },
      { id: 10, amount: 0, cost: 10000000000, cps: 5662310.4, display: [] },
      { id: 11, amount: 0, cost: 420000000000, cps: 84934656, display: [] },
      { id: 12, amount: 0, cost: 5000000000000, cps: 679477248, display: [] },
      { id: 13, amount: 0, cost: 60000000000000, cps: 5435817984, display: [] },
      {
        id: 14,
        amount: 0,
        cost: 720000000000000,
        cps: 43486543872,
        display: []
      },
      {
        id: 15,
        amount: 0,
        cost: 5000000000000000,
        cps: 260919263232,
        display: []
      },
      {
        id: 16,
        amount: 0,
        cost: 210000000000000000,
        cps: 3913788948480,
        display: []
      },
      {
        id: 17,
        amount: 0,
        cost: 2500000000000000000,
        cps: 31310311587840,
        display: []
      },
      {
        id: 18,
        amount: 0,
        cost: 250000000000000000000,
        cps: 626206231756800,
        display: []
      },
      {
        id: 19,
        amount: 0,
        cost: 25000000000000000000000,
        cps: 12524124635136000,
        display: []
      }
    ],
    version: 0, // 0: Black; 1: White
    starter: 0, // 0: Snivy; 1: Tepig; 2: Oshawott
    showExportSave: false,
    showImportSave: false,
    saveString: ""
  };

  handleCandyClick = () => {
    const numCandy = this.state.numCandy + 1;
    this.setState({ numCandy });
  };

  handleBuyClick = pokemon => {
    const numCandy = this.state.numCandy - pokemon.cost;
    const candyPerSecond = this.state.candyPerSecond + pokemon.cps;

    let pokemonList = [...this.state.pokemonList];
    const index = pokemonList.indexOf(pokemon);
    pokemonList[index] = { ...pokemon };
    pokemonList[index].cost *= 1.15;
    pokemonList[index].amount++;

    pokemonList[index].display.push(pokemon.id);

    this.setState({ numCandy, candyPerSecond, pokemonList });
  };

  handlePassiveCandies = () => {
    const numCandy = this.state.numCandy + this.state.candyPerSecond * 1;
    this.setState({ numCandy });
    setTimeout(this.handlePassiveCandies, 1000);
  };

  handleStarterClick = starter => {
    this.setState({ starter });
  };

  handleVersionClick = version => {
    this.setState({ version });
  };

  openExportSave = () => {
    const showExportSave = true;

    const simpleCrypto = new SimpleCrypto("victini");
    const saveState = {
      numCandy: this.state.numCandy,
      candyPerSecond: this.state.candyPerSecond,
      pokemonList: this.state.pokemonList,
      version: this.state.version,
      starter: this.state.starter
    };
    const saveString = simpleCrypto.encrypt(saveState);

    this.setState({ showExportSave, saveString });
  };

  closeExportSave = () => {
    const showExportSave = false;
    this.setState({ showExportSave });
  };

  getExportSaveClasses = () => {
    return this.state.showExportSave
      ? "alert alert-warning alert-dismissible m-1"
      : "display-hide";
  };

  handleImportSave = () => {
    this.toggleImportSave();
    const saveString = document.getElementById("saveInput").value;
    if (saveString !== "") {
      document.getElementById("saveInput").value = "";
      const simpleCrypto = new SimpleCrypto("victini");
      const saveState = simpleCrypto.decrypt(saveString, true);
      const {
        numCandy,
        candyPerSecond,
        pokemonList,
        version,
        starter
      } = saveState;
      this.setState({
        numCandy,
        candyPerSecond,
        pokemonList,
        version,
        starter
      });
    }
  };

  toggleImportSave = () => {
    const showImportSave = !this.state.showImportSave;
    this.setState({ showImportSave });
  };

  getImportSaveClasses = () => {
    return this.state.showImportSave ? "input-group m-1" : "display-hide";
  };

  render() {
    return (
      <div>
        <div className="column left fixed">
          <RareCandy
            numCandy={this.state.numCandy}
            candyPerSecond={this.state.candyPerSecond}
            onCandyClick={this.handleCandyClick}
          />
          <div className="btm fixed">
            <Options
              starter={this.state.starter}
              version={this.state.version}
              onStarterClick={this.handleStarterClick}
              onVersionClick={this.handleVersionClick}
            />
          </div>
        </div>

        <div className="column left" />

        <div className="column middle">
          <div className="ie-class">
            <button
              className="btn btn-primary m-2"
              onClick={this.openExportSave}
            >
              Export Save
            </button>
            <button
              className="btn btn-primary m-2"
              onClick={this.toggleImportSave}
            >
              Import Save
            </button>
            <div className={this.getExportSaveClasses()}>
              {this.state.saveString}
              <button className="close" onClick={this.closeExportSave}>
                <span>&times;</span>
              </button>
            </div>
            <div className={this.getImportSaveClasses()}>
              <input type="text" className="form-control" id="saveInput" />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary"
                  onClick={this.handleImportSave}
                >
                  Import
                </button>
              </div>
            </div>
          </div>
          <div className="farm-class">
            <Farm
              pokemonList={this.state.pokemonList}
              version={this.state.version}
              starter={this.state.starter}
            />
          </div>
        </div>

        <div className="column right">
          <Store
            numCandy={this.state.numCandy}
            pokemonList={this.state.pokemonList}
            version={this.state.version}
            starter={this.state.starter}
            onBuyClick={this.handleBuyClick}
          />
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.handlePassiveCandies();
  }
}

export default App;
