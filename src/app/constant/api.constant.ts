const API_HTTP_URL="http://127.0.0.1:8000"
const API_PREFIX = '/api/';
const API_URL=API_HTTP_URL+API_PREFIX
export const API_ENDPOINTS = {
  REGISTER: API_URL+'registration',
  LOGIN: API_URL+'login',
  ATTACHMENT_UPLOAD: API_URL + 'uploadAttachment',
  ATTACHMENT_DELETE: API_URL + 'deleteAttachment',
  ATTACHMENT_DOWNLOAD: API_URL + 'downloadAttachment',
  REPOSITORY_SAVE: API_URL + 'repository',
  REPOSITORY_LIST: API_URL + 'repository-list',
  REPOSITORY_DELETE: API_URL + 'delete-repository',
  FIELD_DEFINATION_UPDATE: API_URL + 'fieldDefination-update',
  SINGLE_REPOSITORY: API_URL + 'repository-list',
  RECORD_SAVE: API_URL + 'saveRecord',
  RECORD_GET: API_URL + 'record',
  REGISTRATION_POST: API_URL + 'registration',
  LOGIN_POST: API_URL + 'login',
  RECORD_Delete: API_URL + 'deleteRecord',
  SIGNLE_RECORD: API_URL + 'singleRecord',
  UPDATE_RECORD: API_URL + 'updateRecord',
} as const;
