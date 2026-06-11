import type { IncomingMessage, ServerResponse } from 'node:http'
import type { RequestContext } from '../system/request-context'

export async function readJsonBody<T>(req: IncomingMessage): Promise<T> {
  const chunks: Buffer[] = []

  for await (const chunk of req) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk))
  }

  if (chunks.length === 0) {
    return {} as T
  }

  const raw = Buffer.concat(chunks).toString('utf-8')
  return JSON.parse(raw) as T
}

export function writeJson(
  res: ServerResponse,
  statusCode: number,
  payload: Record<string, unknown>,
) {
  res.statusCode = statusCode
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.end(JSON.stringify(payload))
}

export function writeSuccess(
  ctx: RequestContext,
  res: ServerResponse,
  data: Record<string, unknown> | unknown,
  statusCode = 200,
) {
  writeJson(res, statusCode, {
    code: 0,
    message: 'success',
    data,
    request_id: ctx.requestId,
  })
}

export function writeError(
  ctx: RequestContext,
  res: ServerResponse,
  statusCode: number,
  code: number,
  message: string,
) {
  writeJson(res, statusCode, {
    code,
    message,
    request_id: ctx.requestId,
  })
}
