import {Component, OnInit} from '@angular/core';
import {UserService} from "./services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  currentUser!: any;

  constructor(
    private user: UserService
  ) {
  }

  ngOnInit(): void {
    this.user.getCurrentUser().subscribe(user => this.currentUser = user)
  }
}
