import { Component, OnInit } from '@angular/core';
import {ContactService} from "../../services/user.service";
import {IEmployee} from "../../services/interfaces/employee.interface";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentUser!: IEmployee
  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.contactService.getCurrentUser().subscribe(user => this.currentUser = user)
  }

}
