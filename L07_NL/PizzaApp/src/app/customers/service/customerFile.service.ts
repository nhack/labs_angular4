import {Injectable} from "@angular/core";

import {ICustomerService} from "./customer.service";

import {Customer} from "../domain/customer";
import {CUSTOMERS} from "../domain/data";

@Injectable()
export class CustomerFileService implements ICustomerService {
  getCustomers(): Array<Customer> {
    return CUSTOMERS;
  }

  getCustomer(id: string): Customer {
    return CUSTOMERS.filter(customer => customer.id === id).pop();
  }
}
