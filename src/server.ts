import koa from 'koa';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';
import cors from 'koa2-cors';

import config from './config';

import healthRoute from './routes/healthRoute';

const app = new koa();

app.use(bodyParser());
app.use(logger());
app.use(cors());


app.use(healthRoute.routes());

const server = app
  .listen(config.port, () => {
    console.log(`Listening on Port: ${config.port}`);
  })
  .on('error', error => {
    console.log(error);
  });

export default server;