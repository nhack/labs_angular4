/**
 * Created by marius on 28/05/2017.
 */
import {Authorization} from "../domain/authorization";
import {InjectionToken} from "@angular/core";

export interface IAuthorizationService {
  getAuthorization(): Promise<Authorization>
}

export const AUTH_SERVICE: InjectionToken<IAuthorizationService> = new InjectionToken<IAuthorizationService>('app.auth.service');
