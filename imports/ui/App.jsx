import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Session } from 'meteor/session';
import { Accounts } from 'meteor/accounts-base';
import { Mongo } from 'meteor/mongo';

import { Test } from '../data/collections';

import NewUser from './NewUser.jsx';
import LogIn from './LogIn.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
    this._handleLogUt = this._handleLogUt.bind(this);
  }
  _handleLogUt(e) {
    Meteor.logout((err) => {
      console.log(err);
    });
  }
  componentDidMount() {
    let promise = undefined;
    let { username } = this.state;
    let self = this;
    if (Meteor.isClient) {
      Meteor.autorun(function funcAutoRunOnClient() {

        // Meteor.subscribe('user', function() {
        //   console.log(Meteor.users.find({},{username: 1}).fetch());
        // });

        const g = Meteor.subscribe('user');

        if (g.ready()) {
          promise = new Promise((resolve,reject) => {
            resolve( Meteor.users.findOne({ _id: Meteor.userId() }) );
          })
            .then(result => {
              if (result) {
                self.setState({ username: result.username });
              }
            });
        }
      });
    }
  }
  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>
        </header>
        <ul>
          <h1>{this.props.data.test +' '+ this.state.username}</h1>
        </ul>

        <div>
          {
            <NewUser />
          }
        </div>
        <br />
        <div>
          <input type="button" onClick={this._handleLogUt} value="chao" />
        </div>
        <br /><br />
        <div>
          {
            <LogIn />
          }
        </div>
      </div>
    );
  }
}

export default AppG = graphql(gql`
{
  test
}
`, {
  options: {pollInterval: 5000}
})(App);
