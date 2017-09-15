import {Injectable} from "@angular/core";

import {Pizza} from "../domain/pizza";
import {PIZZAS} from "../domain/data";
import {IPizzaService} from "./pizza.service";
import {Review} from "../domain/review";

@Injectable()
export class PizzaFileService implements IPizzaService {
  getPizzas(): Promise<Array<Pizza>> {
    return Promise.resolve(PIZZAS);
  }

  getPizza(id: string): Promise<Pizza> {
    return Promise.resolve(PIZZAS.find(pizza => pizza._id === id));
  }

  addReview(pizza: Pizza, review: Review): Promise<Pizza> {
    throw new Error('addReview not supported for PizzaFileService');
  }
}
