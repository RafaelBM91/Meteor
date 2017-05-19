import { Meteor } from 'meteor/meteor';
import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';

import { Test } from '../imports/data/collections';

import { schema } from '../imports/data/schema';

createApolloServer({ schema });

Meteor.startup(() => {

	Meteor.publish('test',function() {
		return Test.find();
	});

	Meteor.publish('user',function() {
		return Meteor.users.find({ _id: this.userId },{ username: 1 });
	});

});
