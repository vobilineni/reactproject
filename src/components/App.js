import React, { Component } from 'react';
import logo from '../assets/images/wel.jpg';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Hello Welcome to my react application</p>
          <img src={logo} className="App-logo" alt="logo" />
            <p>To manage project click here &nbsp;
                <a className="App-link" href="projects" rel="noopener noreferrer" >Project Manager</a>
            </p>
            <p>Click here to login &nbsp;
                <a className="App-link" href="logins" rel="noopener noreferrer" >Login</a>
            </p>
        </header>
      </div>
    );
  }
}

export default App;
