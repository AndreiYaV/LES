import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactsComponent} from "./pages/contacts/contacts.component";
import {VacationsComponent} from "./pages/vacations/vacations.component";

const routes: Routes = [
  {path: 'contacts', component: ContactsComponent},
  {path: 'vacations', component: VacationsComponent},
  {path: '', redirectTo: '/contacts', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
