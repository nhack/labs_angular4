/**
 * Created by marius on 27/04/2017.
 */
import {Injectable} from "@angular/core";
import {PreloadingStrategy, Route} from "@angular/router";
import {of} from "rxjs/observable/of";
import {Observable} from "rxjs/Observable";

@Injectable()
export class PreloadSelectedModules implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    return route.data['preload'] ? load() : of(null);
  }
}
