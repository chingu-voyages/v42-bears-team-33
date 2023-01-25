export const HTTP = {
  GET: 'GET',
  POST: 'POST',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
};

export const HTTP_STATUS_CODE = {
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVER_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
};

export const MONGODB_DATABASE = 'friendship';
export const MONGODB_COLLECTION = {
  FRIEND: 'friend',
  USER: 'user',
  SMS: 'sms',
};

export const TWILIO_SENDER = '+13134258191';
