import React, { Component } from 'react';
import AllPeople from './components/AllPeople.js'
import Header from './components/Header.js'
import PersonOne from './components/PersonOne'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          < Header />
          < AllPeople />
          < PersonOne />
      </div>
    );
  }
}

// class="mcnImage"
export default App;
