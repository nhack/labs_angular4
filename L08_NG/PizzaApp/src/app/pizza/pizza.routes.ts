/**
 * Created by marius on 19/04/2017.
 */
import {Routes} from "@angular/router";
import {PizzaComponent} from "./components/pizza/pizza.component";
import {PizzaListComponent} from "./components/pizzaList/pizzaList.component";

export const PIZZA_ROUTES: Routes = [{
  path: '', children: [
    {path: '', component: PizzaListComponent},
    {path: ':id', component: PizzaComponent}
  ]
}];
