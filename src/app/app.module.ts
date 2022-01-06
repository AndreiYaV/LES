import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { RequestsComponent } from './pages/requests/requests.component';
import { HeaderComponent } from "./components/header/header.component";
import { AdvancedSearchComponent } from './components/advanced-search/advanced-search.component';
import { SharedModule } from "./externalModules/shared.module";
import { SearchSelectComponent } from './components/form/search-select/search-select.component';
import { RequestFormComponent } from './components/request-form/request-form.component';
import { CardComponent } from './components/card/card.component';
import { RequestComponent } from './components/request/request.component';
import { RequestCardComponent } from "./components/request-card/request-card.component";
import { DatepickerComponent } from './components/form/datepicker/datepicker.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactsComponent,
    RequestsComponent,
    AdvancedSearchComponent,
    SearchSelectComponent,
    RequestFormComponent,
    CardComponent,
    RequestComponent,
    RequestCardComponent,
    DatepickerComponent,
  ],
  imports: [
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
