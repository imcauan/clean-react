import { AccountModel } from '@/domain/models';
import { AuthenticationParams } from '@/domain/usecases';
import { faker } from '@faker-js/faker';

export function mockAuthentication(): AuthenticationParams {
  return {
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}

export function mockAccountModel(): AccountModel {
  return {
    accessToken: faker.string.uuid(),
  };
}
