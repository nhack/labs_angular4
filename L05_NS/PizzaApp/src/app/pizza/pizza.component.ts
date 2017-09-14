import {Component, Inject, OnInit, ViewEncapsulation} from "@angular/core";
import {Pizza} from "./domain/pizza";
import {IPizzaService, PIZZA_SERVICE} from "./service/pizza.service";

@Component({
  selector: 'pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PizzaComponent implements OnInit {
  private pizzas: Array<Pizza>;

  constructor(@Inject(PIZZA_SERVICE) private pizzaService: IPizzaService) {
  }

  ngOnInit(): void {
    this.pizzaService.getPizzas().then(pizzas => this.pizzas = pizzas);
  }
}
