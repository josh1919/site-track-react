import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
        <TrackBody showWhich = {this.state.currentPage} />
      </div>
    );
  }
}



class Navbar extends Component {
  constructor(){
    super();
    this.state = {
      navLocs: [
          {name: "Home", desc:"navbar-home"},
          {name: "About", desc:"navbar-about"},
          {name: "Contact", desc: "navbar-contact"}
      ]
    }
  }

  renderNavClicker(i){
    // TODO:  there should be an onClick in this function that goes to the parent with the name of the location
  return (
    <li
      id={this.state.navLocs[i].desc}
      className={this.isActive(i)}
      onClick={() => this.props.onClick(this.state.navLocs[i].name)}>
        <a href="#">{this.state.navLocs[i].name}</a>
    </li>
  )
}

 isActive(i) {
 if(this.state.navLocs[i].name == this.props.currentPage){
   return  "'active nav-item'";
 } else {
   return "'nav-item'"
 }
}
  render() {
    return(
      <nav className="navbar navbar-inverse ">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">JMTC Tracking School</a>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              {this.renderNavClicker(0)}
              {this.renderNavClicker(1)}
              {this.renderNavClicker(2)}
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

class TrackBody extends Component {
  render() {
    return(
      <div className = "container-fluid" >
        <div className="col-xs-12 co-sm-12 col-md-10">
          <div className="pull-left" >
            <img src="http://via.placeholder.com/350x350"/>
          </div>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </div>
        <div className="col-xs-12">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </div>
      </div>
    )
  }
}

export default App;
