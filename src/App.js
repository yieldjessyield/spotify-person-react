import React, { Component } from 'react';
import AllPeople from './components/AllPeople.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img alt="" src="https://gallery.mailchimp.com/4670f46c8008a4a44f34600a2/images/9917ba68-194b-4ce7-a09a-b7cc53716f02.png" width="200"/>
          <h2>Welcome to People Maker</h2>
        </div>
          < AllPeople />
      </div>
    );
  }
}

// class="mcnImage"
export default App;
