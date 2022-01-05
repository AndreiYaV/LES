import {Component, Input, OnInit} from '@angular/core';
import {IEmployee} from "../../interfaces/employee.interface";
import {ContactsService} from "../../services/contacts.service";
import {DictionaryService} from "../../services/dictionary.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() data!: IEmployee;

  constructor(
    private contactsService: ContactsService,
    private dictionaryService: DictionaryService
  ) {}

  get departmentName() {
    return this.dictionaryService.departments.find(department => department.id === this.data.department)?.name
  }
}
