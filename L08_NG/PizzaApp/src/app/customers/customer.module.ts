/**
 * Created by marius on 15/10/2016.
 */
import {NgModule} from "@angular/core";

import {RouterModule} from "@angular/router";
import {CUSTOMER_ROUTES} from "./customer.routes";
import {CommonModule} from "@angular/common";
import {CustomerComponent} from "./components/customer/customer.component";
import {CustomerListComponent} from "./components/customerList/customerList.component";
import {CUSTOMER_SERVICE} from "./service/customer.service";
import {CustomerFileService} from "./service/customerFile.service";

@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(CUSTOMER_ROUTES)
  ],
  providers: [
    {provide: CUSTOMER_SERVICE, useClass: CustomerFileService}
  ]
})
export class CustomerModule {
}
