import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Requests} from "../../interfaces/requests.interface";
import IRequestType = Requests.IRequestType;

export interface IRequestData {
  message: string;
  range: {
    end: Date;
    start: Date;
  }
  type: string;
}

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.scss']
})
export class RequestFormComponent implements OnInit {
  @Input() requestTypes!: IRequestType[];
  @Output() requestData:  EventEmitter<IRequestData> = new EventEmitter<IRequestData>()

  requestForm!: FormGroup;
  type: FormControl = new FormControl('', [Validators.required])
  range: FormGroup = new FormGroup({
    start: new FormControl('', [Validators.required]),
    end: new FormControl('', [Validators.required]),
  })

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.requestForm = this.fb.group({
      type: this.type,
      range: this.range,
      message: ['', [Validators.required, Validators.minLength(5)]],
    })
  }

  leaveRequest() {
    console.log(this.requestForm.value)
    this.requestData.emit(this.requestForm.value)
  }

}
