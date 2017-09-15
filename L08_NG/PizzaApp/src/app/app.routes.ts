/**
 * Created by marius on 19/04/2017.
 */
import {Routes} from "@angular/router";
import {FeatureGuard} from "./auth/service/featureGuard.service";
import {Feature} from "./auth/domain/feature";

export const ROUTES: Routes = [
  {path: '', redirectTo: '/pizzas', pathMatch: 'full'},
  {
    path: 'pizzas',
    canActivate: [FeatureGuard],
    loadChildren: './pizza/pizza.module#PizzaModule',
    data: {preload: true, feature: Feature.PIZZA}
  },
  {
    path: 'customers',
    canActivate: [FeatureGuard],
    loadChildren: './customers/customer.module#CustomerModule',
    data: {feature: Feature.CUSTOMERS}
  }
];
