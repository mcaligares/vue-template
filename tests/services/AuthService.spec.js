import { authUser } from '@/services/AuthService';

describe('auth service test', () => {
  it('user authentication failed', () => {
    const result = authUser({ name: 'someuser' });

    expect(result).to.equal(false);
  });

  it('user authentication', () => {
    const name = import.meta.env.VITE_USERNAME_TEST;
    const result = authUser({ name });

    expect(result).to.equal(true);
  });
});
