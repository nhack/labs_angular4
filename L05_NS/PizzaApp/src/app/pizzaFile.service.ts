import {Injectable} from "@angular/core";

import {Pizza} from "./pizza";
import {PIZZAS} from "./data";

@Injectable()
export class PizzaFileService {
  getPizzas():Promise<Array<Pizza>>{
    return Promise.resolve(PIZZAS);
  }
}
