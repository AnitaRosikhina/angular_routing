import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CenzorComponent } from './cenzor/cenzor.component';
import { UserlistComponent } from './userlist/userlist.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import {FormsModule} from "@angular/forms";
import { PhonebookComponent } from './phonebook/phonebook.component';
import {SearchPipe} from "./userlist/search.pipe";
import { WorksComponent } from './works/works.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CenzorComponent,
    UserlistComponent,
    TasklistComponent,
    PhonebookComponent,
    SearchPipe,
    WorksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
