import type { User } from '@/domains/User';

export function createUser(name: string): User {
  return { id: `${new Date().getMilliseconds()}`, name } as User;
}
