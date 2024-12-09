import { inject } from '@angular/core';
import { CanActivateFn, MaybeAsync, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

export const authGuard: CanActivateFn = (next, state): MaybeAsync<boolean> => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (auth.inVerification && !state.url.includes('verify')) {
    router.navigate(['auth', 'verify']);
  }

  if (auth.hasKey) {
    if (state.url.includes('auth')) {
      router.navigate(['studio']);
    }
  } else if (!state.url.includes('auth')) {
    router.navigate(['auth', 'sign-in']);
  }

  return true;
};
