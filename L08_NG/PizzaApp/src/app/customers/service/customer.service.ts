import {InjectionToken} from "@angular/core";

import {Customer} from "../domain/customer";

export interface ICustomerService {
  getCustomers(): Array<Customer>;

  getCustomer(id: string): Customer;
}

export let CUSTOMER_SERVICE = new InjectionToken<ICustomerService>('app.customer.service');
