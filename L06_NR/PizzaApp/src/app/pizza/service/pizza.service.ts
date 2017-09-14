import {Pizza} from "../domain/pizza";
import {OpaqueToken} from "@angular/core";
/**
 * Created by marius on 27/03/2017.
 */
export interface IPizzaService{
  getPizzas(): Promise<Array<Pizza>>;
}

export const PIZZA_SERVICE = new OpaqueToken('app.pizza.service');
