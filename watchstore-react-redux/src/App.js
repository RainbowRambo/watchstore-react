import React, { Component } from "react";

import NavMain from "./components/Nav";
import MainCarousel from "./components/MainCarousel";
import WatchList from "./components/WatchList";

import "./App.css";

class App extends Component {
  state = {
    term: ""
  };

  onTermSubmit = term => {
    console.log(term);
    this.setState({ term: term });
    console.log(this.state.term);
  };

  render() {
    return (
      <div className="App">
        <NavMain onTermSubmit={this.onTermSubmit} />
        <MainCarousel />
        <WatchList />
      </div>
    );
  }
}

export default App;
