import {Component, Input} from "@angular/core";

import {Pizza} from "./domain/pizza";

@Component({
  selector: 'pizza',
  templateUrl: 'pizza.component.html',
  styleUrls: ['pizza.component.css'],
})
export class PizzaComponent {

  @Input()
  private pizza: Pizza;
}
