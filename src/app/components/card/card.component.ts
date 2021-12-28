import {Component, Input, OnInit} from '@angular/core';
import {IEmployee} from "../../interfaces/employee.interface";
import {ContactsService} from "../../services/contacts.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{
  @Input() data!: IEmployee;
  departmentName: string = '';

  constructor(private contactsService: ContactsService) {}

  ngOnInit(): void {
    this.contactsService.getDepartments().subscribe(res => {
      this.departmentName = res.find(department => department.id === this.data.department)!.name
    });
  }
}
