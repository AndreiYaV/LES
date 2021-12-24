import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactsComponent} from "./pages/contacts/contacts.component";
import {RequestsComponent} from "./pages/requests/requests.component";
import {ContactsResolverService} from "./services/contactsResolver.service";
import {RequestResolverService} from "./services/requestResolver.service";

const routes: Routes = [
  {path: '', redirectTo: '/contacts', pathMatch: 'full'},
  {path: 'contacts', component: ContactsComponent, resolve: { contacts: ContactsResolverService }},
  {path: 'requests', component: RequestsComponent, resolve: { requests: RequestResolverService }},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
