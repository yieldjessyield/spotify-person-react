import React, { Component } from 'react';
import AllPeople from './components/AllPeople'
import Header from './components/Header'
import PersonOne from './components/PersonOne'
import Sean from './components/Sean'
import './App.css';
import ajax from 'superagent';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: []
    };

    this.getAllPeople = this.getAllPeople.bind(this)
    this.getUrlBase = this.getUrlBase.bind(this)
  }

  componentWillMount() {
    // debugger
    this.getAllPeople()
  }


  getUrlBase() {
    // return 'http://localhost:3001/'
    return 'https://radiant-forest-84246.herokuapp.com'
    // 'http://localhost:3001/'
  }

  getAllPeople(){
        var urlBase = this.getUrlBase()
        ajax.get(urlBase + '/people')
        .withCredentials()
        .end((error, response) => {
            if (!error && response) {
              // debugger
              // the response.body is a bit of SuperAgent magic
              this.setState({ people: response.body.people });
            } else {
              // debugger
                console.log('There was an error fetching from API', error);
            }
        }
    );
  }

  render() {
    // debugger
    return (
      <div className="App">
          < Header />
          < AllPeople people={this.state.people} getAllPeople={this.getAllPeople}/>
          < Sean getAllPeople={this.getAllPeople} getUrlBase={this.getUrlBase}/>
          < PersonOne getAllPeople={this.getAllPeople} getUrlBase={this.getUrlBase}/>
      </div>
    );
  }
}

// class="mcnImage"
export default App;
