import { HttpPostClient } from '@/data/protocols';
import { RemoteAuthentication } from '@/data/usecases';

const url = 'any_url';

function makeHttpPostClient() {
  class HttpPostClientSpy implements HttpPostClient {
    url?: string;

    async post(url: string): Promise<void> {
      this.url = url;
      return null;
    }
  }

  return new HttpPostClientSpy();
}

type SutTypes = {
  // TODO: remove this any
  httpPostClientSpy: any;
  sut: RemoteAuthentication;
};

function makeSut(): SutTypes {
  const httpPostClientSpy = makeHttpPostClient();
  return {
    httpPostClientSpy,
    sut: new RemoteAuthentication(url, httpPostClientSpy),
  };
}

describe('RemoteAuthentication', () => {
  it('should call HttpClient with correct URL', async () => {
    // Arrange
    const { sut, httpPostClientSpy } = makeSut();

    // Act
    await sut.auth();

    expect(httpPostClientSpy.url).toBe(url);
  });
});
