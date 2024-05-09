interface Response {
  code: string;
  data: unknown;
}

export function isSuccessResponse(response: Response) {
  return response.code === '2000';
}
