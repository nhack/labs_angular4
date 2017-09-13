import {Injectable} from "@angular/core";

import {Pizza} from "./pizza";
import {PIZZAS} from "./data";

@Injectable()
export class PizzaService {
  getPizzas(): Array<Pizza> {
    return PIZZAS;
  }
}
