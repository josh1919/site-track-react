import React, { Component } from 'react';
import './BodyMain.css';

class BodyMain extends Component {
  visibilityChooser(testLocation) {
    if(this.props.currentlyShowing === testLocation){
      return "container-fluid";
    }  else { //it eauals Home or in the unlikely event of anything else
      return "container-fluid hidden";
    }
  };
  handleSubmit(){
    alert("something was submitted");
  }
  render() {
    return(
      <div>
        <div id="body-home" className={this.visibilityChooser("Home")} >
          <div className="col-xs-12 co-sm-12 col-md-10 col-md-offset-1">
            <h1>Home</h1>
            <div className="row">
              <div className="col-md-6" >
                <img src="http://via.placeholder.com/350x350" alt="Joe"/>
              </div>
              <div className="col-md-6">
                <p className="lead">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
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

        <div id="body-about" className={this.visibilityChooser("About")}>
          <div className="col-xs-12 co-sm-12 col-md-10 col-md-offset-1">
            <h2>About</h2>
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

        <div id="body-contact" className={this.visibilityChooser("Contact")}>
          <div className="col-xs-12 co-sm-12 col-md-6 col-md-offset-3">
            <h2>Contact</h2>
            <form onSubmit={() => this.handleSubmit()}>
              <div className="form-group">
                <label for="first-name">First name: </label>
                <input type="text" className="form-control" id="first-name" />
                <br />
                <label for="last-name">Last name: </label>
                <input type="text" className="form-control" id="last-name" />
                <br />
              </div>
              <div className="form-group">
                <label for="email">Email: </label>
                <input type="email" className="form-control" id="email" />
                <br />
                <label for="phone">Phone Number: </label>
                <input type="tel" className="form-control" id="phone-number" />
              </div>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
)
}
}

export default BodyMain;
