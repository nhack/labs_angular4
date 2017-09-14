import {Component, Inject} from "@angular/core";
import {Customer} from "../../domain/customer";
import {CUSTOMER_SERVICE, ICustomerService} from "../../service/customer.service";

@Component({
  selector: 'customer-list',
  templateUrl: 'customerList.component.html',
  styleUrls: ['customerList.component.css'],
})
export class CustomerListComponent {

  private customers: Customer[];

  constructor(@Inject(CUSTOMER_SERVICE) private customerService: ICustomerService) {
    this.customers = this.customerService.getCustomers();
  }
}
