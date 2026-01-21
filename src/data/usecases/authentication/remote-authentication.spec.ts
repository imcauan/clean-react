import { makeHttpPostClient } from '@/data/test';
import { RemoteAuthentication } from '@/data/usecases';
import { mockAuthentication } from '@/domain/test/mock-authentication';
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
  it('should call HttpPostClient with correct URL', async () => {
    // Arrange
    const url = faker.internet.url();
    const { sut, httpPostClientSpy } = makeSut(url);

    // Act
    await sut.auth(mockAuthentication());

    // Assert
    expect(httpPostClientSpy.url).toBe(url);
  });

  it('should call HttpPostClient with correct body', async () => {
    // Arrange
    const { sut, httpPostClientSpy } = makeSut();
    const params = mockAuthentication();

    // Act
    await sut.auth(params);

    // Assert
    expect(httpPostClientSpy.body).toEqual(params);
  });
});
