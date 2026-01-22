import { HttpPostParams } from '@/data';
import { AxiosHttpClient } from '@/infra/http';
import { faker } from '@faker-js/faker';
import axios from 'axios';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

type SutTypes = {
  sut: AxiosHttpClient;
};

function makeSut(): SutTypes {
  const sut = new AxiosHttpClient();

  return { sut };
}

function mockPostRequest(): HttpPostParams<any> {
  return {
    url: faker.internet.url(),
    body: faker.helpers.objectValue({
      any_value: 'any_value',
    }),
  };
}

describe('AxiosHttpClient', () => {
  it('should call axios with correct url and verb', async () => {
    // Arrange
    const request = mockPostRequest();
    const { sut } = makeSut();

    // Act
    await sut.post(request);

    // Assert
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url);
  });
});
