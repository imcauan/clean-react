import {
  HttpPostClient,
  HttpPostParams,
  HttpResponse,
  HttpStatusCode,
} from '@/data/protocols';

export function makeHttpPostClient() {
  class HttpPostClientSpy implements HttpPostClient {
    url?: string;
    body?: object;
    response: HttpResponse = {
      statusCode: HttpStatusCode.NO_CONTENT,
    };

    async post(params: HttpPostParams): Promise<HttpResponse> {
      this.url = params.url;
      this.body = params.body;
      return this.response;
    }
  }

  return new HttpPostClientSpy();
}
