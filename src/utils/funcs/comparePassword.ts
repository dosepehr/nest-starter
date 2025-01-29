import { compare } from 'bcrypt';
export const comparePassword = async (plainPassword: string, hash: string) => {
  const match = await compare(plainPassword, hash);
  return match;
};
