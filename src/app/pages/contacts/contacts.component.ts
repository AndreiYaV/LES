import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Contacts} from "../../interfaces/contacts.interface";
import IContactsData = Contacts.IContactsData;
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SearchService} from "../../services/search.service";
import {IEmployee} from "../../interfaces/employee.interface";
import {PageEvent} from "@angular/material/paginator";
import {PAGINATION_OPTIONS} from "../../constants/pagination.constants.";
import {DictionaryService} from "../../services/dictionary.service";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contactsData!: IContactsData;
  searchResultsCount!: number | null;
  basicForm!: FormGroup;
  changeView = false;
  sliceResult: IEmployee[] | null = [];
  readonly PAGINATION_OPTIONS = PAGINATION_OPTIONS;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private searchService: SearchService,
    private dictionaryService: DictionaryService
  ) {}

  ngOnInit(): void {
    this.contactsData = this.route.snapshot.data.contacts;
    this.dictionaryService.setData('departments', this.route.snapshot.data.contacts.departments);
    this.basicForm = this.fb.group({
      search: ['', [Validators.required, Validators.minLength(3)]]
    })
  }

  basicSearch() {
    if (!this.basicForm.value.search) {
      return;
    }
    this.changeView = true;
    const value = this.basicForm.value.search
    this.searchService.basicSearch(value, 0, PAGINATION_OPTIONS.PAGE_SIZE).subscribe(response => {
      this.searchResultsCount = Number(response.headers.get('X-Total-Count'));
      this.sliceResult = response.body
    })
  }

  onPageChange(event: PageEvent) {
    const startIdx = event.pageIndex * event.pageSize;
    let endIdx = startIdx + event.pageSize;
    if (this.searchResultsCount && endIdx > this.searchResultsCount) {
      endIdx = this.searchResultsCount;
    }
    this.searchService.basicSearch(this.basicForm.value.search, startIdx, endIdx).subscribe(response => this.sliceResult = response.body)

  }
}
