import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar.js';
import BodyMain from './BodyMain.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      currentPage: "Home",
    }
  }

  handleClick(newLocation) {
    // TODO: this will take in the change from the nav bar and change the state of currentPage. in Navbar bar what will change will be the className="active" will change to
    // current state and the div showing the main body will update to match the active nav button
    this.setState({
      currentPage: newLocation,
    })
  }
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <Navbar currentPage={this.state.currentPage} onClick={(i) => this.handleClick(i)}/>
        </div>
        <BodyMain currentlyShowing = {this.state.currentPage} />
      </div>
    );
  }
}

export default App;
