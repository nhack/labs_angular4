import {Pizza} from "./pizza";
import {Component, Input} from "@angular/core";
import {Review} from "./review";

@Component({
  selector: 'tabs',
  templateUrl: 'tabs.component.html',
  styleUrls: ['tabs.component.css']
})
export class TabsComponent {

  @Input()
  private pizza: Pizza;

  private tab: number;
  private newReview: Review;

  constructor() {
    this.tab = 1;
    this.newReview = <Review>{};
  }

  public selectTab(tid: number) {
    this.tab = tid;
  }

  public isSelected(tid: number): boolean {
    return this.tab === tid;
  }

  public onSubmit(){
    this.newReview.createdOn = new Date().getMilliseconds();
    this.pizza.reviews.push(this.newReview);
    this.newReview = <Review>{};
  }
}
