import {Pizza} from "../../domain/pizza";
import {Component, Inject, Input} from "@angular/core";
import {Review} from "../../domain/review";
import {IPizzaService, PIZZA_SERVICE} from "../../service/pizza.service";

@Component({
  selector: 'tabs',
  templateUrl: 'tabs.component.html',
  styleUrls: ['tabs.component.css']
})
export class TabsComponent {

  @Input()
  private pizza: Pizza;

  private tab: number;

  constructor(@Inject(PIZZA_SERVICE) private pizzaService: IPizzaService) {
    this.tab = 1;
  }

  public selectTab(tid: number) {
    this.tab = tid;
  }

  public isSelected(tid: number): boolean {
    return this.tab === tid;
  }

  public addReview(review: Review) {
    this.pizzaService.addReview(this.pizza, review)
      .then(() => this.pizza.reviews.push(review));
  }
}
