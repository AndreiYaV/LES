import {Component, Input} from '@angular/core';
import {IEmployee} from "../../interfaces/employee.interface";
import {DictionaryService} from "../../services/dictionary.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() data!: IEmployee;

  constructor(
    private dictionaryService: DictionaryService
  ) {}

  get departmentName() {
    return this.dictionaryService.getData('departments')
      .find(department => department.id === this.data.department)?.name
  }
}
