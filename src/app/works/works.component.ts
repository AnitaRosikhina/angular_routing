import { Component } from '@angular/core';
import {Location} from "@angular/common";

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent {

  constructor(private location: Location) { }

  navigateToTheLastRoute() {
    this.location.back();
  }
}
