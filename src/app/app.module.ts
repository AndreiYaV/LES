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
import { RequestCardComponent } from "./components/request-card/request-card.component";
import { DatepickerComponent } from './components/form/datepicker/datepicker.component';
import { DiffDatePipe } from './pipes/diff-date.pipe';
import { EditMenuComponent } from './components/edit-menu/edit-menu.component';
import {ModalConfirmComponent} from './components/modals/modal-confirm/modal-confirm.component';
import { ModalEditComponent } from './components/modals/modal-edit/modal-edit.component';
import { TableComponent } from './components/table/table.component';
import {MatTableModule} from "@angular/material/table";
import { TransformDataPipe } from './pipes/transform-data.pipe';


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
    RequestCardComponent,
    DatepickerComponent,
    DiffDatePipe,
    EditMenuComponent,
    ModalConfirmComponent,
    ModalEditComponent,
    TableComponent,
    TransformDataPipe,
  ],
  imports: [
    SharedModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
