import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IEmployee} from "../../interfaces/employee.interface";
import {DictionaryService} from "../../services/dictionary.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() data!: IEmployee;
  @Input() currentUser$!: Observable<IEmployee>;
  @Output() changeCurrentUser: EventEmitter<IEmployee> = new EventEmitter<IEmployee>();

  constructor(
    private dictionaryService: DictionaryService,
  ) {}

  get departmentName() {
    return this.dictionaryService.getData('departments')
      .find(department => department.id === this.data.department)?.name
  }

  changeUser(data: IEmployee) {
    this.changeCurrentUser.emit(data)
  }
}
