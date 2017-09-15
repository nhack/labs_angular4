/**
 * Created by marius on 28/05/2017.
 */
import {IAuthorizationService} from "./authorization.service";
import {Authorization} from "../domain/authorization";
import {AUTH} from "../domain/data";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthorizationFileService implements IAuthorizationService {
  getAuthorization(): Promise<Authorization> {
    return Promise.resolve(AUTH);
  }
}
