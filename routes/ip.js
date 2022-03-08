import axios from 'axios';
import log from 'npmlog';

const LOGGER = 'ROUTES/IP';

async function ipRaw(request, response, next) {
  log.info(LOGGER, 'query', request.originalUrl);
  try {
    const ipResponse = await axios.get(`https://ifconfig.co${request.originalUrl}`);
    return response.send(ipResponse.data);
  } catch (e) {
    return next(e);
  }
}

export default ipRaw;
