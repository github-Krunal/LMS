import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LOCALSTORAGE_CONSTANT } from '../constant/localstorage.constant';
import { LocalStorageService } from '../utility/localstorage.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const localStorageService=inject(LocalStorageService)
  const user = localStorageService.getLocalStorage<{ name: string; role: string }>(LOCALSTORAGE_CONSTANT.USER);
  if (user) {
    const lastUrl = localStorageService.getLocalStorage<string>(LOCALSTORAGE_CONSTANT.LAST_VISITED_URL);
    if (lastUrl && lastUrl !== '/login') {
      router.navigateByUrl(lastUrl);
      return false;
    }
    return true
  } else {
    // ❌ No user → redirect to login
    router.navigate(['/auth/login']);
    return false;
  }
};
