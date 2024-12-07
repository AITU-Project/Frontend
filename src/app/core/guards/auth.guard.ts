import { inject } from '@angular/core';
import { CanActivateFn, MaybeAsync, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

export const authGuard: CanActivateFn = (next, state): MaybeAsync<boolean> => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (auth.isAuthenticated()) {
    if (state.url.includes('auth')) {
      console.log('Redirecting to studio');
      router.navigate(['studio']);
    }

    return true;
  } else {
    console.log('Redirecting to sign-in');
    router.navigate(['auth', 'sign-in']);
    return false;
  }
};
