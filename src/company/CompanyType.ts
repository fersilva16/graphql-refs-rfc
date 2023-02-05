import {
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

import type { Company } from './Company';
import { users } from '../user/__fixtures__/users';
import { UserType } from '../user/UserType';

export const CompanyType = new GraphQLObjectType<Company>({
  name: 'Company',
  fields: () => ({
    id: {
      type: GraphQLID,
      resolve: (company) => company.id,
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (company) => company.name,
    },
    users: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(UserType))),
      resolve: (company) => users.filter((user) => user.company === company.id),
    },
  }),
});
