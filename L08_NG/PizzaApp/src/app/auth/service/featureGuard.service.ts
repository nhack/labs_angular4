/**
 * Created by marius on 28/05/2017.
 */
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {AUTH_SERVICE, IAuthorizationService} from "./authorization.service";
import {Inject, Injectable} from "@angular/core";
import {Feature} from "../domain/feature";

@Injectable()
export class FeatureGuard implements CanActivate {
  constructor(@Inject(AUTH_SERVICE) private authService: IAuthorizationService,
              private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.getAuthorization()
      .then(auth => {
        if (route.data['feature'] === Feature.PIZZA && auth.pizzaFeatureEnabled) {
          return true;
        }
        if (route.data['feature'] === Feature.CUSTOMERS && auth.customersFeatureEnabled) {
          return true;
        }

        this.router.navigate(['/']);
        return false;
      });
  }
}
