/**
 * Created by marius on 19/04/2017.
 */
import {Routes} from "@angular/router";
import {PizzaComponent} from "./pizza.component";
import {PizzaListComponent} from "./pizzaList.component";

export const ROUTES: Routes = [
  {path: '', redirectTo: '/pizzas', pathMatch: 'full'},
  {path: 'pizzas', children: [{path: '', component: PizzaListComponent}, {path: ':id', component: PizzaComponent}]}
];
