import { AuthenticationParams } from '@/domain/usecases';
import { faker } from '@faker-js/faker';

export function mockAuthentication(): AuthenticationParams {
  return {
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}
