import { AccountModel } from '@/domain/models';

type AuthentcationParams = {
  email: string;
  password: string;
};

export interface Authentication {
  auth(params: AuthentcationParams): Promise<AccountModel>;
}
