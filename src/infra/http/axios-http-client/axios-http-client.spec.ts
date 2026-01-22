import { HttpPostParams } from '@/data/protocols';
import { AxiosHttpClient } from '@/infra/http';
import { faker } from '@faker-js/faker';
import axios from 'axios';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;
const mockedAxiosResult = {
  data: faker.helpers.objectValue({
    any_value: 'any_value',
  }),
  status: faker.number,
};
mockedAxios.post.mockResolvedValue(mockedAxiosResult);

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
  it('should call axios with correct values', async () => {
    // Arrange
    const request = mockPostRequest();
    const { sut } = makeSut();

    // Act
    await sut.post(request);

    // Assert
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body);
  });

  it('should return the correct statusCode and body', async () => {
    // Arrange
    const { sut } = makeSut();

    // Act
    const result = await sut.post(mockPostRequest());

    // Assert
    expect(result).toEqual({
      statusCode: mockedAxiosResult.status,
      body: mockedAxiosResult.data,
    });
  });
});
