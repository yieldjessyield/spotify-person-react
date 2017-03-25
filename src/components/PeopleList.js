import React from 'react';
import PersonInfo from './PersonInfo'
import Header from './Header'
import '../PeopleList.css';
import ajax from 'superagent';

export default class PeopleList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [],
      nameValue: "Sean",
      cityValue: "New York"
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

  makePerson(event){
    event.preventDefault()
    var urlBase = this.getUrlBase()
        ajax.post(urlBase + '/people')
        .send({person: { name: this.state.nameValue, favoriteCity: this.state.cityValue }})
        .withCredentials()
        .end((error, response) => {
            if (!error && response) {
              this.setState({ nameValue: "Sean", cityValue: "New York" })
              this.getAllPeople()
            } else {
              alert('Could not create Sean');
            }
        }
    );
  }

  modifyPerson(person){
    var urlBase = this.getUrlBase()
        ajax.put(urlBase + '/people')
        .send({person: person, update: "Brooklyn"})
        .withCredentials()
        .end((error, response) => {
            if (!error && response) {
              this.getAllPeople()
            } else {
              alert('Could not modify Sean');
            }
        }
    );
  }

  deletePerson(person){
    var urlBase = this.getUrlBase()
        ajax.del(urlBase + '/people/' + person.id)
        .withCredentials()
        .end((error, response) => {
            if (!error && response) {
              this.getAllPeople()
              alert('Person with id of ' + person.id + ' deleted')
            } else {
              alert('Could not be deleted');
            }
        }
    );
  }

  handleNameChange(event) {
    this.setState({nameValue: event.target.value});
  }

  handleCityChange(event) {
    this.setState({cityValue: event.target.value});
  }


  render() {
    if (!this.state.people[0]){
      var note = <p className="Note">You have not created anyone yet</p>
    }else{
      note = ""
    }
    return (
      <div className="PeopleList">
      < Header />
        <h1>All The People Modified</h1>
        <h3>Make a Person!</h3>
          <form onSubmit={this.makePerson.bind(this)}>
            <label type="text">Person Name</label><br/>
            <input type="text" value={this.state.nameValue} onChange={this.handleNameChange.bind(this)} /><br/><br/>
            <label type="text">Favorite City</label><br/>
            <input type="text" value={this.state.cityValue} onChange={this.handleCityChange.bind(this)} /><br/><br/>
            <button type="submit">MAKE</button>
          </form>
        <h3>All your People!</h3>
        {note}
        <ul>
          {this.state.people.map(person =>
            < PersonInfo key={person.id} modifyPerson={this.modifyPerson.bind(this)} deletePerson={this.deletePerson.bind(this)} person={person}/>
          )}
        </ul>
      </div>
    );
  }
}