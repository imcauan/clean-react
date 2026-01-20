import { HttpPostClient } from '@/data/protocols';

export function makeHttpPostClient() {
  class HttpPostClientSpy implements HttpPostClient {
    url?: string;

    async post(url: string): Promise<void> {
      this.url = url;
      return null;
    }
  }

  return new HttpPostClientSpy();
}
