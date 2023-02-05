import { GraphQLList, GraphQLNonNull, GraphQLObjectType } from 'graphql';

import { companies } from '../company/__fixtures__/companies';
import { users } from '../user/__fixtures__/users';

export const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    me: {
      type: new GraphQLNonNull('User'),
      resolve: () => users[0],
    },
    users: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull('User'))),
      resolve: () => users,
    },
    companies: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull('Company'))),
      resolve: () => companies,
    },
  }),
});
