import React from 'react';
import ReactDOM from 'react-dom';
import ajax from 'superagent';
// import $ from 'jquery'
// import axios from 'axios';

export default class AllPeople extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      people: []
    };
  }


  componentWillMount() {
    var URLBASE = 'https://radiant-forest-84246.herokuapp.com'
    // 'http://localhost:3001'
    // using https for now change back to http
    ajax.get(URLBASE + '/people')
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
  // componentDidMount() {
  //   request
  //     .get('http://localhost:3001/people.json')
  //     .end(function(err, res){
  //       if (err || !res.ok) {
  //         debugger
  //         alert('Oh no! error');
  //       } else {
  //         debugger
  //         alert('yay got ' + JSON.stringify(res.body));
  //       }
  //     });
  //   // fetch('http://localhost:3001/people.json')  
  //   //   .then(function(response) {
  //   //     debugger
  //   //     return response.json()
  //   //   })
  // }

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



// ReactDOM.render(
//   <AllPeople subreddit="reactjs"/>,
//   document.getElementById('root')
// );