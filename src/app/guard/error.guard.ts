import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

export const errorGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree => {
  const router = inject(Router);

  if (sessionStorage.getItem('answer') && sessionStorage.getItem('answer') !== '4') {
    return true;
  }
  router.navigate(['/home'])
  return false;
};
