import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/Rx";

import {Pizza} from "../domain/pizza";
import {IPizzaService} from "./pizza.service";
import {RestService} from "../../common/rest.service";
import {Review} from "../domain/review";

@Injectable()
export class PizzaRestService extends RestService implements IPizzaService {

  private readonly _baseUrl: string = "http://pizza-store.herokuapp.com/api/pizzas";
  private _url: string;

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
    this._url = this._baseUrl;
    return this.getData<Pizza>();
  }

  addReview(pizza: Pizza, review: Review): Promise<Pizza> {
    this._url = this._baseUrl + '/addReview/' + pizza._id;
    return this.putData<Pizza>(JSON.stringify(review));
  }
}
