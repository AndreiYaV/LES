import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Contacts} from "../../interfaces/contacts.interface";
import IContactsData = Contacts.IContactsData;
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SearchService} from "../../services/search.service";
import {IEmployee} from "../../interfaces/employee.interface";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contactsData!: IContactsData;
  searchResults!: IEmployee[];
  basicForm!: FormGroup;
  changeView = false;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private searchService: SearchService,
  ) {}
  ngOnInit(): void {
    this.contactsData = this.route.snapshot.data.contacts;
    this.basicForm = this.fb.group({
      search: ['', [Validators.minLength(3)]]
    })
  }

  basicSearch() {
    this.changeView = true;
    this.searchService.basicSearch(this.basicForm.value.search).pipe(
      take(1)
    ).subscribe(res => this.searchResults = res)
  }
}
