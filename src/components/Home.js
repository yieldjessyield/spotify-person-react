import React, { Component } from 'react';
import AllPeople from './AllPeople'
import Header from './Header'
import PersonOne from './PersonOne'
import Sean from './Sean'
import ajax from 'superagent';
import '../App.css';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: []
    };

    this.getAllPeople = this.getAllPeople.bind(this)
    this.getUrlBase = this.getUrlBase.bind(this)
  }

  componentWillMount() {
    this.getAllPeople()
  }


  getUrlBase() {
    // return 'http://localhost:3001'
    return 'https://radiant-forest-84246.herokuapp.com'
  }

  getAllPeople(){
        var urlBase = this.getUrlBase()
        ajax.get(urlBase + '/people')
        .withCredentials()
        .end((error, response) => {
            if (!error && response) {
              // the response.body is a bit of SuperAgent magic
              this.setState({ people: response.body.people });
            } else {
                console.log('There was an error fetching from API', error);
            }
        }
    );
  }

  render() {
    return (
      <div className="Home">
          < Header />
          < AllPeople people={this.state.people} getAllPeople={this.getAllPeople}/>
          < Sean getAllPeople={this.getAllPeople} getUrlBase={this.getUrlBase}/>
          < PersonOne getAllPeople={this.getAllPeople} getUrlBase={this.getUrlBase}/>
      </div>
    );
  }
}