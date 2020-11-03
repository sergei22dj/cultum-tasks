// Client
export interface ClientError {
  _tag: 'ClientError';
  message: string;
}

export const clientError = (message: string): ClientError => ({
  _tag: 'ClientError',
  message
});

export const isClientError = <E extends { _tag: string }>(e: E | ClientError): e is ClientError =>
  e._tag === 'ClientError';
