import React, {Component} from 'react';
// import logo from '../assets/images/wel.jpg';
import {NavLink} from 'react-router-dom';
// import {DropDownButton} from 'react-dropdown-button';
// import {MenuItem} from 'react-bootstrap';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header> {/*className="App-header"*/}
          {/*<div className="App">
            <p>Hello Welcome to my react application</p>
             <img src={logo} className="App-logo" alt="logo"/>
          </div>*/}
          {/* <a className="App-link" href="projects" rel="noopener noreferrer">Project Manager</a>*/}
          <NavLink to="/home">
            <button className="btn--small">Home</button>
          </NavLink>
          <NavLink to="/projects">
            <button className="btn--small">projects</button>
          </NavLink>
          <NavLink to="/details">
            <button className="btn--small">Details</button>
          </NavLink>
          {/*<NavLink to="/details">
            <DropDownButton>
              <MenuItem eventKey="1">Action</MenuItem>
              <MenuItem eventKey="2">Another action</MenuItem>
              <MenuItem eventKey="3" active> Active Item </MenuItem>
              <MenuItem divider/>
              <MenuItem eventKey="4">Separated link</MenuItem>
            </DropDownButton>
          </NavLink>*/}
        </header>
      </div>
    );
  }
}

export default App;
