import {Pizza} from "../domain/pizza";
import {InjectionToken} from "@angular/core";
import {Review} from "../domain/review";
/**
 * Created by marius on 27/03/2017.
 */
export interface IPizzaService {
  getPizzas(): Promise<Array<Pizza>>;
  getPizza(id: string): Promise<Pizza>;
  addReview(pizza: Pizza, review: Review): Promise<Pizza>;
}

export const PIZZA_SERVICE = new InjectionToken<IPizzaService>('app.pizza.service');
