import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Contacts} from "../../interfaces/contacts.interface";
import IContactsData = Contacts.IContactsData;

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdvancedSearchComponent implements OnInit {
  @Input() data!: IContactsData;
  advancedSearch!: FormGroup;
  department = new FormControl('');
  building: FormControl = new FormControl('');

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.advancedSearch = this.fb.group({
      firstName: ['', [Validators.minLength(3)]],
      lastName: ['', [Validators.minLength(3)]],
      department: this.department,
      building: this.building,
      room: [{value: '', disabled: this.buildingValue}]
    })
    this.advancedSearch.valueChanges.subscribe(value => {
      console.log('FORM VALUES CHANGE:', value)
    });

  }

  get buildingValue() {
    return this.building.value;
  }

  searchSubmit() {
    const {firstName, lastName, room, } = this.advancedSearch.value
    if (!firstName && !lastName && !room) {
      return
    }

    console.log(this.advancedSearch.value)
  }
}
