import React, { Component } from 'react';

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
        <a>{this.state.navLocs[i].name}</a>
      </li>
    )
  }

  isActive(i) {
    if(this.state.navLocs[i].name === this.props.currentPage){
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

export default Navbar;
