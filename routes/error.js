import log from 'npmlog';

const LOGGER = 'ROUTES/ERROR';

function errorHandler(error, request, response, next) {
  log.error(LOGGER, error.message);
  return response.status(404).send(error.message);
}

export default errorHandler;
