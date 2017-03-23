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

  getUrlBase() {
    return 'http://localhost:3001'
    // 'https://radiant-forest-84246.herokuapp.com'
    // 'http://localhost:3001/'
  }

  makeSean(){
        var urlBase = this.getUrlBase()
        ajax.post(urlBase + '/people')
        .send({ name: "Sean", favoriteCity: "New York" })
        .withCredentials()
        .end((error, response) => {
            if (!error && response) {
              debugger
              this.props.getAllPeople()
              this.setState({ sean: response.body, modifyButton: "active"});
            } else {
              debugger
              alert('Could not create Sean');
            }
        }
    );
  }

  modifySean(){
        debugger
        var urlBase = this.getUrlBase()
        ajax.post(urlBase + '/people')
        // check this.state.sean
        .send({ id: "1", name: "Sean", favoriteCity: "New York" })
        .withCredentials()
        .end((error, response) => {
            if (!error && response) {
              debugger
              this.setState({ sean: response.body, modifyButton: "disabled"});
            } else {
              debugger
              alert('Could not create Sean');
            }
        }
    );
  }


  render() {
    debugger
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