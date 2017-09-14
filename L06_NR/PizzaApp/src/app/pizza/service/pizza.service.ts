import {Pizza} from "../domain/pizza";
import {OpaqueToken} from "@angular/core";
import {Review} from "../domain/review";
/**
 * Created by marius on 27/03/2017.
 */
export interface IPizzaService {
  getPizzas(): Promise<Array<Pizza>>;
  getPizza(id: string): Promise<Pizza>;
  addReview(pizza: Pizza, review: Review): Promise<Pizza>;
}

export const PIZZA_SERVICE = new OpaqueToken('app.pizza.service');
