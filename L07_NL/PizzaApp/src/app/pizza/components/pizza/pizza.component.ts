import {Component, Inject, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

import {IPizzaService, PIZZA_SERVICE} from "../../service/pizza.service";
import {Pizza} from "../../domain/pizza";

@Component({
  selector: 'pizza',
  templateUrl: 'pizza.component.html',
  styleUrls: ['pizza.component.css'],
})
export class PizzaComponent implements OnInit {

  private pizza: Pizza;

  constructor(@Inject(PIZZA_SERVICE) private pizzaService: IPizzaService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.pizzaService.getPizza(this.activatedRoute.snapshot.params['id'])
      .then(pizza => this.pizza = pizza);
  }
}
