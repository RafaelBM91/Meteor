import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base'

export default class App extends Component {
	constructor(props) {
		super(props);
		this._handleSave = this._handleSave.bind(this);
	}
	_handleSave(e) {
		Accounts.createUser({
			username: this.refs.username.value,
			email: this.refs.email.value,
			password: this.refs.password.value,
			profile: this.refs.profile.value,
		}, (error) => {
			if (error)
				console.log('Error: '+error);
			else
				console.log('Se guardo..!');
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
					Email: <input ref="email" type="text" />
				</div>
				<br/>
				<div>
					Password: <input ref="password" type="password" />
				</div>
				<br/>
				<div>
					Profile: <input ref="profile" type="text" />
				</div>
				<br/>
				<div>
					<input type="button" value="Guardar" onClick={this._handleSave} />
				</div>
			</div>
		);
	}
}
