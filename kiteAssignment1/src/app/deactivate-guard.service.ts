import { Injectable } from '@angular/core';
import { CanDeactivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DeactivateGuardService implements CanDeactivate<CanComponentDeactivate> {

  constructor(private router: Router) { }

  canDeactivate(component: CanComponentDeactivate, 
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ) {
     
      // check for the route of login component 
      if(nextState.url === "/"){
        return false;
      }
      return true;
}
}

