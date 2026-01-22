import { mockPostRequest } from '@/data/test';
import { AxiosHttpClient } from '@/infra/http';
import { mockAxios } from '@/infra/test';
import axios from 'axios';

jest.mock('axios');

type SutTypes = {
  sut: AxiosHttpClient;
  mockedAxios: jest.Mocked<typeof axios>;
};

function makeSut(): SutTypes {
  const mockedAxios = mockAxios();
  const sut = new AxiosHttpClient();

  return { sut, mockedAxios };
}

describe('AxiosHttpClient', () => {
  it('should call axios with correct values', async () => {
    // Arrange
    const request = mockPostRequest();
    const { sut, mockedAxios } = makeSut();

    // Act
    await sut.post(request);

    // Assert
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body);
  });

  it('should return the correct statusCode and body', () => {
    // Arrange
    const { sut, mockedAxios } = makeSut();

    // Act
    const result = sut.post(mockPostRequest());

    // Assert
    expect(result).toEqual(mockedAxios.post.mock.results[0].value);
  });
});
