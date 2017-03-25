import React from 'react';

export default class AllPeople extends React.Component {

  render() {
    if (!this.props.people[0]){
      var note = <p className="Note">You have not created anyone yet</p>
    }else{
      note = ""
    }
    return (
      <div className="PeopleList">
        <h1>All The People</h1>
        {note}
        <ul>
          {this.props.people.map(person =>
            <li key={person.id}>Person #{person.id}: {person.name} + {person.favoriteCity}</li>
          )}
        </ul>
      </div>
    );
  }
}
