import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Contacts} from "../../interfaces/contacts.interface";
import IContactsData = Contacts.IContactsData;

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.scss']
})
export class AdvancedSearchComponent implements OnInit {
  @Input() data!: IContactsData;
  advancedSearch!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.advancedSearch = this.fb.group({
      firstName: ['', [Validators.minLength(3)]],
      lastName: ['', [Validators.minLength(3)]],
      department: [''],
      building: [''],
      room: ['']
    })

  }

  searchSubmit() {
    const {firstName, lastName, room} = this.advancedSearch.value
    if (!firstName && !lastName && !room) {
      return
    }
    console.log(this.advancedSearch.value)
  }
}
