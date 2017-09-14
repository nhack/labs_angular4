import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector: 'extras',
  templateUrl: './extras.component.html',
  styleUrls: ['./extras.component.css']
})
export class ExtrasComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  @Input()
  private extras: any;
}
