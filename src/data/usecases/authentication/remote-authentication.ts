import { HttpPostClient, HttpStatusCode } from '@/data/protocols';
import { AccountModel } from '@/domain/models';
import { InvalidCredentialsError, UnexpectedError } from '@/domain/errors';
import { AuthenticationParams } from '@/domain/usecases';

export class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<
      AuthenticationParams,
      AccountModel
    >,
  ) {}

  async auth(params: AuthenticationParams): Promise<void> {
    const response = await this.httpPostClient.post({
      url: this.url,
      body: params,
    });

    switch (response.statusCode) {
      case HttpStatusCode.OK:
        break;
      case HttpStatusCode.UNAUTHORIZED:
        throw new InvalidCredentialsError();
      default:
        throw new UnexpectedError();
    }
  }
}
