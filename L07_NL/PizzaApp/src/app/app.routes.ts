/**
 * Created by marius on 19/04/2017.
 */
import {Routes} from "@angular/router";

export const ROUTES: Routes = [
  {path: '', redirectTo: '/pizzas', pathMatch: 'full'},
  {path: 'customers', loadChildren: './customers/customer.module#CustomerModule', data: {preload: true}}
];
