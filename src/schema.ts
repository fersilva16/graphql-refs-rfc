import { GraphQLSchema } from 'graphql';

import { CompanyType } from './company/CompanyType';
import { QueryType } from './query/QueryType';
import { UserType } from './user/UserType';

export const schema = new GraphQLSchema({
  query: QueryType,
  types: [CompanyType, UserType],
});
