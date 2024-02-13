import { LoginCredentials } from './login.type';

const users: LoginCredentials[] = [
  { email: 'test@gmail.com', password: 'test123' },
  { email: 'test2@gmail.com', password: '1234567' },
  { email: 'groman2000@gmail.com', password: 'test567' },
];

export function mockLogin(data: LoginCredentials): boolean {
  const { email, password } = data;
  const user = users.find((u) => u.email === email && u.password === password);

  simulateNetworkDelay();

  return !!user;
}

function simulateNetworkDelay() {
  const delay = 1000;
  const start = Date.now();
  while (Date.now() - start < delay) {
    /* empty */
  }
}
