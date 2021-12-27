import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Contacts} from "../../interfaces/contacts.interface";
import IContactsData = Contacts.IContactsData;
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SearchService} from "../../services/search.service";
import {IEmployee} from "../../interfaces/employee.interface";
import {PageEvent} from "@angular/material/paginator";

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
  sliceResult!: IEmployee[];

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private searchService: SearchService,
  ) {}

  ngOnInit(): void {
    this.contactsData = this.route.snapshot.data.contacts;
    this.basicForm = this.fb.group({
      search: ['', [Validators.required, Validators.minLength(3)]]
    })
  }

  basicSearch() {
    if (!this.basicForm.value.search) {
      return;
    }
    this.changeView = true;
    this.searchService.basicSearch(this.basicForm.value.search).subscribe(res => {
      this.searchResults = res
      this.sliceResult = this.searchResults.slice(0,3);
    })
  }

  onPageChange(event: PageEvent) {
    const startIdx = event.pageIndex * event.pageSize;
    let endIdx = startIdx + event.pageSize;
    if (endIdx > this.searchResults.length) {
      endIdx = this.searchResults.length;
    }
    this.sliceResult = this.searchResults.slice(startIdx, endIdx)
  }
}
