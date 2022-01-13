import {Component, Input} from '@angular/core';
import {IEmployee} from "../../interfaces/employee.interface";
import {Observable} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input()currentUser$!: Observable<IEmployee>;
}
