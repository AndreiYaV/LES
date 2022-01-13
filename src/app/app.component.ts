import {Component, OnInit} from '@angular/core';
import {UserService} from "./services/user.service";
import {IEmployee} from "./interfaces/employee.interface";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  currentUser$!: Observable<IEmployee>;

  constructor(
    private userService: UserService,
    ) {}

  ngOnInit(): void {
    this.userService.getCurrentUser()
    this.currentUser$ = this.userService.currentUser$
  }
}
