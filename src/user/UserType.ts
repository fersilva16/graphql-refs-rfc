import {
  GraphQLID,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

import type { User } from './User';
import { companies } from '../company/__fixtures__/companies';

export const UserType = new GraphQLObjectType<User>({
  name: 'User',
  fields: () => ({
    id: {
      type: GraphQLID,
      resolve: (user) => user.id,
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (user) => user.name,
    },
    company: {
      type: new GraphQLNonNull('Company'),
      resolve: (user) =>
        companies.find((company) => company.id === user.company),
    },
  }),
});
