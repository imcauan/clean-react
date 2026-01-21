import { HttpPostClient, HttpPostParams } from '@/data/protocols';

export function makeHttpPostClient() {
  class HttpPostClientSpy implements HttpPostClient {
    url?: string;
    body?: object;

    async post(params: HttpPostParams): Promise<void> {
      this.url = params.url;
      this.body = params.body;
      return null;
    }
  }

  return new HttpPostClientSpy();
}
