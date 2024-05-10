interface Response {
  code: string;
  data: unknown;
}

export function isErrorResponse(response: Response) {
  return response.code !== '2000';
}
