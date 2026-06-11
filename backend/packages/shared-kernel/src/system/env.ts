import { existsSync, readFileSync } from 'node:fs'
import path from 'node:path'

function stripWrappingQuotes(value: string) {
  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    return value.slice(1, -1)
  }

  return value
}

export function loadEnvFile(fileName = '.env') {
  const envPath = path.resolve(process.cwd(), fileName)

  if (!existsSync(envPath)) {
    return
  }

  const content = readFileSync(envPath, 'utf8')
  const lines = content.split(/\r?\n/)

  for (const rawLine of lines) {
    const line = rawLine.trim()

    if (!line || line.startsWith('#')) {
      continue
    }

    const separatorIndex = line.indexOf('=')

    if (separatorIndex <= 0) {
      continue
    }

    const key = line.slice(0, separatorIndex).trim()
    const value = stripWrappingQuotes(line.slice(separatorIndex + 1).trim())

    if (!(key in process.env)) {
      process.env[key] = value
    }
  }
}
