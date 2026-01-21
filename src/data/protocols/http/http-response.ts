export const HttpStatusCode = {
  OK: 200,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500,
} as const;

export type HttpStatusCode =
  (typeof HttpStatusCode)[keyof typeof HttpStatusCode];

export type HttpResponse = {
  statusCode: number;
  body?: any;
};
