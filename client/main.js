import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import ApolloClient from 'apollo-client';
import { meteorClientConfig } from 'meteor/apollo';
import { ApolloProvider } from 'react-apollo';

import App from '../imports/ui/App.jsx';

const client = new ApolloClient(meteorClientConfig());

Meteor.startup(() => {
  render(
  	<ApolloProvider client={client}>
  		<App />
  	</ApolloProvider>,
  	document.getElementById('app')
  );
});
