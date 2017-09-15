import {Component, Inject} from "@angular/core";
import {Customer} from "../../domain/customer";
import {CUSTOMER_SERVICE, ICustomerService} from "../../service/customer.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'customers',
  templateUrl: 'customer.component.html',
  styleUrls: ['customer.component.css'],
})
export class CustomerComponent {

  private customer: Customer;

  constructor(@Inject(CUSTOMER_SERVICE) private customerService: ICustomerService,
              private route: ActivatedRoute) {
    route.params.subscribe(params => this.customer = this.customerService.getCustomer(params['id']));
  }
}
