import log from 'npmlog';
import ipRaw from './routes/ip';
import errorHandler from './routes/error';

const LOGGER = 'ROUTES';

function routes(app) {
  /* Init routes */
  log.info(LOGGER, 'init routes');

  /* IP address query */
  app.get('*', ipRaw);

  /* Error handler */
  app.use('*', errorHandler);
}

export default routes;
