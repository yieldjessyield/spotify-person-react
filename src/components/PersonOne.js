import React from 'react';
import ajax from 'superagent';

export default class PersonOne extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      personOne: "",
      deleteButton: "disabled"
    };
  }

  getPersonOne(){
        var urlBase = this.props.getUrlBase()
        ajax.get(urlBase + '/people/1')
        .withCredentials()
        .end((error, response) => {
            if (!error && response) {
              if (!response.body.error){
                this.setState({ personOne: response.body, deleteButton: "active" });
              }else{
                alert('There is no person with the id of 1! They might have not been created or you might have already deleted them...');
              }
            } else {
              alert('There is no person with the id of 1!');
            }
        }
    );
  }

  deletePersonOne(){
    var urlBase = this.props.getUrlBase()
        ajax.del(urlBase + '/people/1')
        .withCredentials()
        .end((error, response) => {
            if (!error && response) {
              this.props.getAllPeople()
              this.setState({ personOne: "", deleteButton: "disabled" });
              alert("Person with id of 1 deleted")
            } else {
              alert('Could not be deleted');
            }
        }
    );
  }


  render() {
    if (this.state.deleteButton === "disabled"){
      var deleteButton = <button type="button" disabled>DELETE</button>
      var deletePrompt = ""
    } else if (this.state.deleteButton === "active"){
      deleteButton = <button type="button" onClick={this.deletePersonOne.bind(this)}>DELETE</button>
      deletePrompt = <p>Click delete to delete this person</p>
    }
    if (this.state.personOne === ""){
      var person = ""
      var findPrompt = <p>Find the person with the id of 1</p>
    } else {
      person = <p>User #{this.state.personOne.id} {this.state.personOne.name} + {this.state.personOne.favoriteCity}</p>
      findPrompt = ""
    }
    return (
      <div className="PersonOneList">
        <h1>Person One</h1>
        {person}
        {findPrompt}
        {deletePrompt}
        <button type="button" onClick={this.getPersonOne.bind(this)}>FIND</button>
        {deleteButton}
      </div>
    );
  }
}