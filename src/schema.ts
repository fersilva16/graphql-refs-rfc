import { GraphQLSchema } from 'graphql';

import { QueryType } from './query/QueryType';

export const schema = new GraphQLSchema({
  query: QueryType,
});
