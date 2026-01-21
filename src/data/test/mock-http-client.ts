import { HttpPostClient, HttpPostParams } from '@/data/protocols';

export function makeHttpPostClient() {
  class HttpPostClientSpy implements HttpPostClient {
    url?: string;

    async post(params: HttpPostParams): Promise<void> {
      this.url = params.url;
      return null;
    }
  }

  return new HttpPostClientSpy();
}
