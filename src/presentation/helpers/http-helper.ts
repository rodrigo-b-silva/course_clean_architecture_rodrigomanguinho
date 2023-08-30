import { type HttpResponse } from '../protocols/http'

export const successRequest = (body: any): HttpResponse => ({
  statusCode: 200,
  body
})

export const createRequest = (body: any): HttpResponse => ({
  statusCode: 201,
  body
})

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
})

export const notFound = (error: Error): HttpResponse => ({
  statusCode: 404,
  body: error
})

export const internalServerError = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: error
})
