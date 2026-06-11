import type { IncomingMessage } from 'node:http'

export type RequestContext = {
  requestId: string
  path: string
  method: string
}

export function createRequestContext(req: IncomingMessage): RequestContext {
  const requestIdHeader = req.headers['x-request-id']
  const requestId = Array.isArray(requestIdHeader)
    ? requestIdHeader[0]
    : requestIdHeader ?? `req_${Date.now()}`

  return {
    requestId,
    path: req.url ?? '/',
    method: req.method ?? 'GET',
  }
}

