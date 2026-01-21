import { makeHttpPostClient } from '@/data/test';
import { RemoteAuthentication } from '@/data/usecases';
import { faker } from '@faker-js/faker';

type SutTypes = {
  // TODO: remove this any
  httpPostClientSpy: any;
  sut: RemoteAuthentication;
};

function makeSut(url: string = faker.internet.url()): SutTypes {
  const httpPostClientSpy = makeHttpPostClient();
  return {
    httpPostClientSpy,
    sut: new RemoteAuthentication(url, httpPostClientSpy),
  };
}

describe('RemoteAuthentication', () => {
  it('should call HttpClient with correct URL', async () => {
    // Arrange
    const url = faker.internet.url();
    const { sut, httpPostClientSpy } = makeSut(url);

    // Act
    await sut.auth();

    // Assert
    expect(httpPostClientSpy.url).toBe(url);
  });
});
