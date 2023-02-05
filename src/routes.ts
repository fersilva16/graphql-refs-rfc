import { graphqlHTTP } from 'koa-graphql';
import Router from 'koa-router';

import { schema } from './schema';

const routes = new Router();

routes.all(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
);

export { routes };
