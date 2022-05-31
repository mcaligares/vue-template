import type { User } from '@/domains/User';

const USERNAME = import.meta.env.VITE_USERNAME_TEST;

export function authUser(user: User): boolean {
  if (!user) return false;

  return user.name === USERNAME;
}
