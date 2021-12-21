import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ContactService} from "../../services/user.service";
import {IDepartment} from "../../services/interfaces/department.interface.";
import {take} from "rxjs/operators";
import {IBuilding} from "../../services/interfaces/building.interface";

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.scss']
})
export class AdvancedSearchComponent implements OnInit {
  advancedSearch!: FormGroup;
  departments: IDepartment[] = [];
  buildings: IBuilding[] = [];
  constructor(
    private fb: FormBuilder,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    this.advancedSearch = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: [''],
      department: [''],
      building: [''],
      room: ['']
    })

    this.contactService.getDepartments()
      .pipe(
        take(1)
      ).subscribe(departments => {
        this.departments = [{name: 'Any', id: ''}, ...departments]
      })

    this.contactService.getBuildings()
      .pipe(
        take(1)
      ).subscribe(building => {
      this.buildings = [{name: 'Any', id: ''}, ...building]
    })
  }

  searchSubmit() {

  }
}
