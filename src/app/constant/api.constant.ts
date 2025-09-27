const API_HTTP_URL="http://127.0.0.1:8000"
const API_PREFIX = '/api/';
const API_URL=API_HTTP_URL+API_PREFIX
export const API_ENDPOINTS = {
  REGISTER: API_URL+'registration',
} as const;
