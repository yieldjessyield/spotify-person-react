import React from 'react';
import ReactDOM from 'react-dom';
import ajax from 'superagent';

export default class AllPeople extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      people: []
    };

    this.getAllPeople = this.getAllPeople.bind(this)
    this.getUrlBase = this.getUrlBase.bind(this)
  }

  getUrlBase() {
    return 'http://localhost:3001/'
    // 'https://radiant-forest-84246.herokuapp.com'
    // 'http://localhost:3001/'
  }

  getAllPeople(){
        var urlBase = this.getUrlBase()
        ajax.get(urlBase + '/people')
        .withCredentials()
        .end((error, response) => {
            if (!error && response) {
              debugger
              // the response.body is a bit of SuperAgent magic
              this.setState({ people: response.body.people });
            } else {
              debugger
                console.log('There was an error fetching from API', error);
            }
        }
    );
  }

  componentWillMount() {
    debugger
    this.getAllPeople()
  }


  render() {
    return (
      <div className="PeopleList">
        <h1>All The People</h1>
        <ul>
          {this.state.people.map(person =>
            <li key={person.id}>{person.name} + {person.favoriteCity}</li>
          )}
        </ul>
      </div>
    );
  }
}
