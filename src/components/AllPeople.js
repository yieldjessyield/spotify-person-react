import React from 'react';
import ReactDOM from 'react-dom';
import ajax from 'superagent';

export default class AllPeople extends React.Component {
  constructor(props) {
    super(props);
  }


    debugger
  render() {
    // add if statement to say if there are no people that you should add some!
    return (
      <div className="PeopleList">
        <h1>All The People</h1>
        <ul>
          {this.props.people.map(person =>
            <li key={person.id}>Person #{person.id}: {person.name} + {person.favoriteCity}</li>
          )}
        </ul>
      </div>
    );
  }
}
