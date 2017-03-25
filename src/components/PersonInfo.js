import React from 'react';

export default class PersonInfo extends React.Component {

  render() {
    return (
      <li className="Person">
          <div key={this.props.person.id}>Person #{this.props.person.id}: {this.props.person.name} + {this.props.person.favoriteCity}</div>
          <button type="button" onClick={this.props.modifyPerson.bind(this, this.props.person)}>MODIFY</button>
          <button type="button" onClick={this.props.deletePerson.bind(this, this.props.person)}>DELETE</button>
      </li>
    );
  }
}