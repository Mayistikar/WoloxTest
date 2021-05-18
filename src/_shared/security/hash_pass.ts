import { hash, compare } from 'bcrypt';

export async function HashPassword(password: string): Promise<string> {
  return hash(password, 10);
}

export async function ValidatePassword(userPassword:string, dbPassword: string): Promise<Boolean> {
  const _dbPassword = dbPassword || '';
  return compare(userPassword, _dbPassword);
}
