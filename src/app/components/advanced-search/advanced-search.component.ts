import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Contacts} from "../../interfaces/contacts.interface";
import IContactsData = Contacts.IContactsData;
import {take} from "rxjs/operators";

export interface IAdvancedSearch {
  building?: string;
  department?: string;
  firstName?: string;
  lastName?: string;
  room?: string;
}

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdvancedSearchComponent implements OnInit {
  @Input() data!: IContactsData;
  @Output() advancedSearchSubmit: EventEmitter<IAdvancedSearch> = new EventEmitter<IAdvancedSearch>()
  advancedSearch!: FormGroup;
  department = new FormControl('');
  building: FormControl = new FormControl('');

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.advancedSearch = this.fb.group({
      firstName: ['', [Validators.minLength(3)]],
      lastName: ['', [Validators.minLength(3)]],
      department: this.department,
      building: this.building,
      room: [{value: "", disabled: true}],
    })

    this.building.valueChanges.pipe(take(1)).subscribe(value => {
      if (value) {
        this.advancedSearch.controls.room.enable()
      }
    })
  }

  searchSubmit() {
    const {firstName, lastName, room } = this.advancedSearch.value
    if (!firstName && !lastName && !room) {
      return
    }
    this.advancedSearchSubmit.emit(this.advancedSearch.value)
  }
}
