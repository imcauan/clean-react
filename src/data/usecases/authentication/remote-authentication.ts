import { HttpPostClient, HttpStatusCode } from '@/data/protocols';
import { InvalidCredentialsError } from '@/domain/errors';
import { AuthenticationParams } from '@/domain/usecases';

export class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient,
  ) {}

  async auth(params: AuthenticationParams): Promise<void> {
    const response = await this.httpPostClient.post({
      url: this.url,
      body: params,
    });

    switch (response.statusCode) {
      case HttpStatusCode.UNAUTHORIZED:
        throw new InvalidCredentialsError();
      default:
        return null;
    }
  }
}
