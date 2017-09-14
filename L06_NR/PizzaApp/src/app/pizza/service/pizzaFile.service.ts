import {Injectable} from "@angular/core";

import {Pizza} from "../domain/pizza";
import {PIZZAS} from "../domain/data";
import {IPizzaService} from "./pizza.service";

@Injectable()
export class PizzaFileService implements IPizzaService {
  getPizzas(): Promise<Array<Pizza>> {
    return Promise.resolve(PIZZAS);
  }
}
