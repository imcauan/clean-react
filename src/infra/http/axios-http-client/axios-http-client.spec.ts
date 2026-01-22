import { AxiosHttpClient } from '@/infra/http';
import { faker } from '@faker-js/faker';
import axios from 'axios';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('AxiosHttpClient', () => {
  it('should call axios with correct url', async () => {
    // Arrange
    const url = faker.internet.url();
    const sut = new AxiosHttpClient();

    // Act
    await sut.post({ url });

    // Assert
    expect(mockedAxios).toHaveBeenCalledWith(url);
  });
});
