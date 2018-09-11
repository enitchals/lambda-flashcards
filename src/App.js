import React, { Component } from 'react';
import data from './data.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      all: data,
      selected: null
    }
    this.randomize = this.randomize.bind(this);
  }

  componentDidMount() {
    this.randomize();
  }

  randomize() {
    const length = data.length;
    const index = Math.floor(Math.random()*length);
    this.setState({selected: this.state.all[index]})
  }

  remove(item) {
    const data = this.state.all.filter(prompt => prompt != item);
    this.setState({all:data})
    this.randomize();
  }

  render() {
    return (
      <div className="App">
        <div className="prompt">{this.state.selected}</div>
        <button className="button" onClick={() => this.randomize()}>Show Another</button>
        <button className="button" onClick={() => this.remove(this.state.selected)}>Remove from Stack</button>
        <br/>
        <div>{`${this.state.all.length} flashcards remain`}</div>
      </div>
    );
  }
}

export default App;
