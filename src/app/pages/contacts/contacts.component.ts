import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Contacts} from "../../interfaces/contacts.interface";
import IContactsData = Contacts.IContactsData;
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit{
  contactsData!: IContactsData
  basicForm!: FormGroup;
  changeView = false;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {
    this.contactsData = this.route.snapshot.data.data;
    this.basicForm = this.fb.group({
      search: ['', [Validators.minLength(3)]]
    })
  }

  basicSearch() {
    this.changeView = true;
  }
}
