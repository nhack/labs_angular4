/**
 * Created by marius on 15/10/2016.
 */
import {Routes} from "@angular/router";
import {CustomerComponent} from "./components/customer/customer.component";
import {CustomerListComponent} from "./components/customerList/customerList.component";

export const CUSTOMER_ROUTES: Routes = [{
  path: 'customers', children: [
    {path: '', component: CustomerListComponent},
    {path: ':id', component: CustomerComponent}
  ]
}];
