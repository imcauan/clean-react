import { HttpPostParams } from '@/data/protocols';
import { faker } from '@faker-js/faker';

export function mockPostRequest(): HttpPostParams<any> {
  return {
    url: faker.internet.url(),
    body: faker.helpers.objectValue({
      any_value: 'any_value',
    }),
  };
}
