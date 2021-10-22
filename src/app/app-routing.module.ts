import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CenzorComponent} from "./cenzor/cenzor.component";
import {UserlistComponent} from "./userlist/userlist.component";
import {TasklistComponent} from "./tasklist/tasklist.component";
import {PhonebookComponent} from "./phonebook/phonebook.component";
import {WorksComponent} from "./works/works.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {
    path: 'works', component: WorksComponent, children: [
      {path: 'cenzor', component: CenzorComponent},
      {path: 'user-list', component: UserlistComponent},
      {path: 'task-list', component: TasklistComponent},
      {path: 'phonebook', component: PhonebookComponent},
      {path: '', redirectTo: 'cenzor', pathMatch: 'prefix'}
    ]
  },
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
