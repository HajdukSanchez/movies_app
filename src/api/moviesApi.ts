import { API_KEY, BASE_URL, API_RESPONSE_LANGUAGE } from '@env';

import axios from 'axios';

const movieBD = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: API_RESPONSE_LANGUAGE,
  },
});

export { movieBD };
