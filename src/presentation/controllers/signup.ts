import { type HttpRequest, type HttpResponse } from '../protocols/http'
import { MissingParamError } from '../errors/missing-params-error'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new MissingParamError('name')
      }
    }
    if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: new MissingParamError('email')
      }
    }
    return {
      statusCode: 200,
      body: {}
    }
  }
}
