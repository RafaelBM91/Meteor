import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base'

export default class App extends Component {
	constructor(props) {
		super(props);
		this._handleLog = this._handleLog.bind(this);
	}
	_handleLog(e) {
		Meteor.loginWithPassword(
			this.refs.username.value,
			this.refs.password.value,
			(error) => {
				if (error)
					console.log('Error: '+error);
				else
					console.log('Se bienvenido..!');
		});
	}
	render() {
		return (
			<div>
				<div>
					User Name: <input ref="username" type="text" />
				</div>
				<br/>
				<div>
					Password: <input ref="password" type="password" />
				</div>
				<br/>
				<div>
					<input type="button" value="Entrar" onClick={this._handleLog} />
				</div>
			</div>
		);
	}
}