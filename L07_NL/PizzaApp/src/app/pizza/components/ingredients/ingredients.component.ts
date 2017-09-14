import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector: 'ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  @Input()
  private ingredients: string;
}
