import { NextRequest } from "next/server"
import { Readable } from "stream"
import multer from "multer"

export function runMiddleware(req: any, fn: any) {
  return new Promise((resolve, reject) => {
    fn(req, {} as any, (result: any) => {
      return result instanceof Error ? reject(result) : resolve(result)
    })
  })
}

export const storage = multer.memoryStorage()
export const upload = multer({ storage })