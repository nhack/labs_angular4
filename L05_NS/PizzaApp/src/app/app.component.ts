import {Component, OnInit, ViewEncapsulation} from "@angular/core";
import {Pizza} from "./pizza";
import {PizzaRestService} from "./pizzaRest.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  private pizzas: Array<Pizza>;

  constructor(private pizzaService: PizzaRestService) {
  }

  ngOnInit(): void {
    this.pizzaService.getPizzas().then(pizzas => this.pizzas = pizzas);
  }
}
