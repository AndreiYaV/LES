import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {VacationService} from "../../services/vacation.service";
import {take} from "rxjs/operators";
import {IRequestType} from "../../services/interfaces/request-type.interface";

@Component({
  selector: 'app-vacations',
  templateUrl: './vacations.component.html',
  styleUrls: ['./vacations.component.scss']
})
export class VacationsComponent implements OnInit {
  requestForm!: FormGroup;
  requestType!: IRequestType[];

  constructor(
    private fb: FormBuilder,
    private vacationService: VacationService
  ) {}

  ngOnInit(): void {
    this.vacationService.getRequestTypes()
      .pipe(take(1))
      .subscribe(types => this.requestType = types)

    this.requestForm = this.fb.group({
      type: [''],

    })
  }



  leaveRequest() {

  }
}
