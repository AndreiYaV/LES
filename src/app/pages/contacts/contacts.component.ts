import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  AdvancedSearch!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.AdvancedSearch = this.fb.group({
      firstName: [''],
      lastName: [''],
      department: [''],
      building: [''],
      room: ['']
    })
  }

}
