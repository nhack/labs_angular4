/**
 * Created by marius on 19/04/2017.
 */
import {Component, Inject, OnInit, ViewEncapsulation} from "@angular/core";

import {Pizza} from "./pizza/domain/pizza";
import {IPizzaService, PIZZA_SERVICE} from "./pizza/service/pizza.service";

@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  private pizzas: Array<Pizza>;

  constructor(@Inject(PIZZA_SERVICE) private pizzaService: IPizzaService) {
  }

  public ngOnInit() {
    this.pizzaService.getPizzas()
      .then(pizzas => {
        this.pizzas = pizzas;
      });
  }
}
