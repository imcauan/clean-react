import { HttpStatusCode } from '@/data/protocols';
import { HttpPostClientSpy, makeHttpPostClient } from '@/data/test';
import { RemoteAuthentication } from '@/data/usecases';
import { AccountModel, AuthenticationParams } from '@/domain';
import { InvalidCredentialsError, UnexpectedError } from '@/domain/errors';
import {
  mockAccountModel,
  mockAuthentication,
} from '@/domain/test/mock-account';
import { faker } from '@faker-js/faker';

type SutTypes = {
  httpPostClientSpy: HttpPostClientSpy<AuthenticationParams, AccountModel>;
  sut: RemoteAuthentication;
};

function makeSut(url: string = faker.internet.url()): SutTypes {
  const httpPostClientSpy = makeHttpPostClient<
    AuthenticationParams,
    AccountModel
  >();
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

  it('should return an AccountModel if HttpPostCLient returns 200', async () => {
    // Arrange
    const { sut, httpPostClientSpy } = makeSut();
    const httpResult = mockAccountModel();
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.OK,
      body: httpResult,
    };

    // Act
    const result = await sut.auth(mockAuthentication());

    // Assert
    expect(result).toEqual(httpResult);
  });

  it('should throw InvalidCredentialsError if HttpPostCLient returns 401', async () => {
    // Arrange
    const { sut, httpPostClientSpy } = makeSut();
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.UNAUTHORIZED,
    };

    // Act
    const result = sut.auth(mockAuthentication());

    // Assert
    await expect(result).rejects.toThrow(new InvalidCredentialsError());
  });

  it('should throw InvalidCredentialsError if HttpPostCLient returns 401', async () => {
    // Arrange
    const { sut, httpPostClientSpy } = makeSut();
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.UNAUTHORIZED,
    };

    // Act
    const result = sut.auth(mockAuthentication());

    // Assert
    await expect(result).rejects.toThrow(new InvalidCredentialsError());
  });

  it('should throw UnexpectedError if HttpPostCLient returns 400', async () => {
    // Arrange
    const { sut, httpPostClientSpy } = makeSut();
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.BAD_REQUEST,
    };

    // Act
    const result = sut.auth(mockAuthentication());

    // Assert
    await expect(result).rejects.toThrow(new UnexpectedError());
  });

  it('should throw UnexpectedError if HttpPostCLient returns 404', async () => {
    // Arrange
    const { sut, httpPostClientSpy } = makeSut();
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.NOT_FOUND,
    };

    // Act
    const result = sut.auth(mockAuthentication());

    // Assert
    await expect(result).rejects.toThrow(new UnexpectedError());
  });

  it('should throw UnexpectedError if HttpPostCLient returns 500', async () => {
    // Arrange
    const { sut, httpPostClientSpy } = makeSut();
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.INTERNAL_SERVER_ERROR,
    };

    // Act
    const result = sut.auth(mockAuthentication());

    // Assert
    await expect(result).rejects.toThrow(new UnexpectedError());
  });
});
