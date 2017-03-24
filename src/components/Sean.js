import React from 'react';
import ReactDOM from 'react-dom';
import ajax from 'superagent';

export default class PersonOne extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sean: "",
      modifyButton: "disabled"
    };
  }

  makeSean(){
        var urlBase = this.props.getUrlBase()
        ajax.post(urlBase + '/people')
        // {"person": {"name": "Shannon", "favoriteCity": "Paris"}}
        .send({person: { name: "Sean", favoriteCity: "New York" }})
        .withCredentials()
        .end((error, response) => {
            if (!error && response) {
              this.props.getAllPeople()
              this.setState({ sean: response.body, modifyButton: "active"});
            } else {
              alert('Could not create Sean');
            }
        }
    );
  }

  modifySean(){
        var urlBase = this.props.getUrlBase()
        ajax.put(urlBase + '/people')
        .send({person: this.state.sean, update: "Brooklyn"})
        .withCredentials()
        .end((error, response) => {
            if (!error && response) {
              this.props.getAllPeople()
              this.setState({ sean: response.body, modifyButton: "disabled"});
            } else {
              alert('Could not modify Sean');
            }
        }
    );
  }


  render() {
    if (this.state.modifyButton === "active"){
      var modButton = <button type="button" onClick={this.modifySean.bind(this)}>MODIFY</button>
    } else {
      var modButton = <button type="button" disabled onClick={this.modifySean.bind(this)}>MODIFY</button>
    }
    return (
      <div className="SeanList">
        <h1>Make and Modify Sean</h1>
        <h3> Watch him appear above!</h3>
        <p>You can only modify the Sean you just created</p>
        <button type="button" onClick={this.makeSean.bind(this)}>MAKE</button>
        {modButton}
      </div>
    );
  }
}