import React, { Component } from 'react';

class Navbar extends Component {
  render() { 
    return (
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
              <li id="navbar-home" className="active"><a href="#">Home</a></li>
              <li id="navbar-about"><a href="#about">About</a></li>
              <li id="navbar-contact"><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
