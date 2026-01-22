import { faker } from '@faker-js/faker';
import axios from 'axios';

export function mockAxios(): jest.Mocked<typeof axios> {
  const mockedAxios = axios as jest.Mocked<typeof axios>;
  mockedAxios.post.mockResolvedValue({
    data: faker.helpers.objectValue({
      any_value: 'any_value',
    }),
    status: faker.number,
  });

  return mockedAxios;
}
