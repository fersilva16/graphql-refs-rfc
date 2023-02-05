import { GraphQLList, GraphQLNonNull, GraphQLObjectType } from 'graphql';

import { companies } from '../company/__fixtures__/companies';
import { CompanyType } from '../company/CompanyType';
import { users } from '../user/__fixtures__/users';
import { UserType } from '../user/UserType';

export const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    me: {
      type: new GraphQLNonNull(UserType),
      resolve: () => users[0],
    },
    users: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(UserType))),
      resolve: () => users,
    },
    companies: {
      type: new GraphQLNonNull(
        new GraphQLList(new GraphQLNonNull(CompanyType)),
      ),
      resolve: () => companies,
    },
  }),
});
