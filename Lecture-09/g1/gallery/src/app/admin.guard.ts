import { CanActivateFn } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  console.log(`adminGuard is running on ${route.url}`);
  const value = Math.random();
  return value > 0.5;
};
