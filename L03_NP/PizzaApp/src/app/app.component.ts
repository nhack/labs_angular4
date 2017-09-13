import {Component} from "@angular/core";
import {Pizza} from "./pizza";
import {PIZZAS} from "./data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private pizzas: Array<Pizza>;

  constructor() {
    this.pizzas = PIZZAS;
  }
}
