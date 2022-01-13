import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {IEmployee} from "../../interfaces/employee.interface";
import {DictionaryService} from "../../services/dictionary.service";
import {Contacts} from "../../interfaces/contacts.interface";
import IDepartment = Contacts.IDepartment;
import {Observable} from "rxjs";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  @Input() set data(employee: IEmployee) {
    this._data = employee;
    this.department = this.dictionaryService.getData('departments')
      .find(department => department.id === employee.department)?.name
  }
  @Input() currentUser$!: Observable<IEmployee>;
  @Output() changeCurrentUser: EventEmitter<IEmployee> = new EventEmitter<IEmployee>();
  _data!: IEmployee;
  department!: IDepartment;

  constructor(
    private dictionaryService: DictionaryService,
  ) {}

  changeUser(data: IEmployee) {
    this.changeCurrentUser.emit(data)
  }
}
