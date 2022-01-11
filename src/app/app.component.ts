import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {UserService} from "./services/user.service";
import {DefaultUser} from "./classes/defaultUser";
import {IEmployee} from "./interfaces/employee.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  currentUser: IEmployee = new DefaultUser();

  constructor(
    private user: UserService,
    ) {}

  ngOnInit(): void {
    this.user.getCurrentUser().subscribe(user => this.currentUser = user)
  }
}
