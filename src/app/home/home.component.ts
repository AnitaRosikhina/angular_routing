import { Component, OnInit } from '@angular/core';
import { CenzorComponent } from '../cenzor/cenzor.component';
import {UserlistComponent} from "../userlist/userlist.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  CenzorComponent = CenzorComponent;
  UserlistComponent = UserlistComponent;
  constructor() { }

  ngOnInit(): void {
  }

}
