import Koa from 'koa';
import bodyParser from 'koa-bodyparser';

import { routes } from './routes';

const app = new Koa();

app.use(
  bodyParser({
    onerror(err, ctx) {
      ctx.throw(err, 422);
    },
  }),
);

app.use(routes.routes()).use(routes.allowedMethods());

app.listen(5001, () => {
  // eslint-disable-next-line no-console
  console.log('Server listening to port 5001');
});
