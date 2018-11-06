import axios     from 'axios'
import constants from '../constants'

/**
 * Create an Axios Client with defaults
 */
const client = axios.create({
  baseURL: constants.api.base_url,
});

export default client;
