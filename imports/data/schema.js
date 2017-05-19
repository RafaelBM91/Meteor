import {
	GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLList,
  GraphQLNonNull,
  GraphQLID,
  GraphQLBoolean,
} from 'graphql';

// import {} from './resolver';

const Query = new GraphQLObjectType({
  name: "Query",
  fields: {
    test: {
    	type: GraphQLString,
    	resolve: (_,{}) => "Hello New Word..!"
    }
  }
});

export const schema = new GraphQLSchema({
  query: Query,
});
