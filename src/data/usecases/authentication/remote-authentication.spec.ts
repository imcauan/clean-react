import { makeHttpPostClient } from '@/data/test';
import { RemoteAuthentication } from '@/data/usecases';

const url = 'any_url';

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

    // Assert
    expect(httpPostClientSpy.url).toBe(url);
  });
});
