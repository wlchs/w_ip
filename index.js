import log from 'npmlog';
import express from 'express';
import routes from './routes';

const LOGGER = 'INDEX';

async function start() {
  log.info(LOGGER, 'starting server');

  /* Set loglevel */
  log.level = 'info';

  /* Initialize express */
  const app = express();

  /* Initialize routes */
  routes(app);

  app.listen(process.env.PORT || 8080, () => {
    log.info(LOGGER, 'Server listening on port:', process.env.PORT || 8080);
  });
}

start()
  .then(() => log.info(LOGGER, 'startup successful'))
  .catch((err) => log.error(LOGGER, 'an error occurred', err));
