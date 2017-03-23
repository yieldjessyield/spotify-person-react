import React from 'react';
import ReactDOM from 'react-dom';
import ajax from 'superagent';

export default class PersonOne extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      personOne: "",
      deleteButton: "inactive"
    };
  }

  getUrlBase() {
    return 'http://localhost:3001/'
    // 'https://radiant-forest-84246.herokuapp.com'
    // 'http://localhost:3001/'
  }

  getPersonOne(){
        var urlBase = this.getUrlBase()
        ajax.get(urlBase + '/people/1')
        .withCredentials()
        .end((error, response) => {
            if (!error && response) {
              debugger
              if (!response.body.error){
                this.setState({ personOne: response.body, deleteButton: "active" });
              }else{
                alert('There is no person with the id of 1! They might have not been created or you might have already deleted them...');
              }
            } else {
              debugger
              alert('There is no person with the id of 1!');
            }
        }
    );
  }

  deletePersonOne(){
    debugger
    var urlBase = this.getUrlBase()
        ajax.del(urlBase + '/people/1')
        .withCredentials()
        .end((error, response) => {
            if (!error && response) {
              debugger
              // check this
              this.setState({ personOne: "", deleteButton: "inactive" });

            } else {
              debugger
              alert('Could not be deleted');
            }
        }
    );

  }


  render() {
    if (this.state.deleteButton === "inactive"){
      var deleteButton = <button type="button" disabled>DELETE</button>
      var deletePrompt = ""
    } else if (this.state.deleteButton === "active"){
      var deleteButton = <button type="button" onClick={this.deletePersonOne.bind(this)}>DELETE</button>
      var deletePrompt = <p>Click delete to delete this person</p>
    }
    if (this.state.personOne === ""){
      var person = ""
      var findPrompt = <p>Find the person with the id of 1</p>
    } else {
      debugger
      var findPrompt = ""
      var person = <p>{this.state.personOne.userName} + {this.state.personOne.userFavoriteCity}</p>
    }
    return (
      <div className="PeopleList">
        <h1>PersonOne</h1>
        {person}
        {findPrompt}
        {deletePrompt}
        <button type="button" onClick={this.getPersonOne.bind(this)}>FIND</button>
        {deleteButton}
      </div>
    );
  }
}