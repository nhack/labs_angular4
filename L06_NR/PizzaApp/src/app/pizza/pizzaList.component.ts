/**
 * Created by marius on 19/04/2017.
 */
import {Component, Inject, OnInit} from "@angular/core";

import {NavigationService} from "../common/navigation.service";
import {IPizzaService, PIZZA_SERVICE} from "./service/pizza.service";
import {Pizza} from "./domain/pizza";

@Component({
  selector: 'pizza-list',
  templateUrl: 'pizzaList.component.html',
  styleUrls: ['pizzaList.component.css'],
})
export class PizzaListComponent implements OnInit {

  private pizzas: Array<Pizza>;

  constructor(@Inject(PIZZA_SERVICE) private pizzaService: IPizzaService,
              private navigationService: NavigationService) {
  }

  public goToPizza(pizza: Pizza): Promise<boolean> {
    return this.navigationService.openPizza(pizza._id);
  }

  public ngOnInit() {
    this.pizzaService.getPizzas()
      .then(pizzas => {
        this.pizzas = pizzas;
      });
  }
}
