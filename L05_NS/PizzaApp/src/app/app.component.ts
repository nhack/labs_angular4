import {Component, ViewEncapsulation} from "@angular/core";
import {Pizza} from "./pizza";
import {PizzaFileService} from "./pizzaFile.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  private pizzas: Array<Pizza>;

  constructor(private pizzaService: PizzaFileService) {
    this.pizzas = this.pizzaService.getPizzas();
  }
}
