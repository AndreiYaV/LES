import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Requests} from "../../interfaces/requests.interface";
import IRequestType = Requests.IRequestType;

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.scss']
})
export class RequestFormComponent implements OnInit {
  @Input() requestTypes!: IRequestType[];
  requestForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.requestForm = this.fb.group({
      type: [''],
      message: ['', [Validators.required, Validators.minLength(5)]],
    })
  }

  leaveRequest() {
    console.log(this.requestForm.value)
  }
}
