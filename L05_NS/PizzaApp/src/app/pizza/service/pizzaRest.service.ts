import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/Rx";

import {Pizza} from "../domain/pizza";
import {IPizzaService} from "./pizza.service";
import {RestService} from "../../common/rest.service";

@Injectable()
export class PizzaRestService extends RestService implements IPizzaService {

  private readonly _url: string = "http://pizza-store.herokuapp.com/api/pizzas";

  constructor(private _http: Http) {
    super();
  }

  protected get http(): Http {
    return this._http;
  }

  protected get url(): string {
    return this._url;
  }

  getPizzas(): Promise<Array<Pizza>> {
    return this.getData<Pizza>();
  }
}
