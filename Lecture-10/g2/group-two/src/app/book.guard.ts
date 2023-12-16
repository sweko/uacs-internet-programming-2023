import { CanActivateFn } from '@angular/router';

export const bookGuard: CanActivateFn = (route, state) => {
  return true;
};
