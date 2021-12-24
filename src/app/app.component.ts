import {Component, OnInit} from '@angular/core';
import {UserService} from "./services/user.service";
import {IEmployee} from "./interfaces/employee.interface";
import {DefaultUser} from "./classes/defaultUser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  currentUser: IEmployee = new DefaultUser();

  constructor(private user: UserService) {}

  ngOnInit(): void {
    this.user.getCurrentUser().subscribe(user => this.currentUser = user)
  }
}
