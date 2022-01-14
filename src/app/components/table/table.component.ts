import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IEmployee} from "../../interfaces/employee.interface";
import {Contacts} from "../../interfaces/contacts.interface";
import IDepartment = Contacts.IDepartment;
import {Observable} from "rxjs";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() displayedColumns: string[] = [];
  @Input() dataSource: IEmployee[] | any = [];
  @Input() departments: IDepartment[] = [];
  @Input() currentUser$!: Observable<IEmployee>;
  @Output() userChange: EventEmitter<IEmployee> = new EventEmitter<IEmployee>();

  constructor() { }

  ngOnInit(): void {
  }

  changeUser(element: any) {
    this.userChange.emit(element);
  }
}
