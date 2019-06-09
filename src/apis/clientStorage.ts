export const session = {
  setToken(token: string) {
    sessionStorage.setItem('token', token);
  },
  getToken(): string | undefined {
    return sessionStorage.getItem('token') || undefined;
  },
  setUser(user: { email: string; username: string }) {
    sessionStorage.setItem('email', user.email);
    sessionStorage.setItem('username', user.username);
  },
  getUser(): { email: string; username: string } | undefined {
    const email = sessionStorage.getItem('email');
    const username = sessionStorage.getItem('username');
    if (email && username) {
      return {
        email,
        username,
      };
    }
    return undefined;
  },
  clear() {
    sessionStorage.clear();
  },
};
