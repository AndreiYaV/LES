import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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
  styleUrls: ['./request-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RequestFormComponent implements OnInit {
  @Input() requestTypes!: IRequestType[];
  @Output() requestData:  EventEmitter<IRequestData> = new EventEmitter<IRequestData>()

  requestForm!: FormGroup;
  type!: FormControl;
  range!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.requestForm = this.fb.group({
      type: this.type = new FormControl('', [Validators.required]),
      range: this.range = new FormGroup({
        start: new FormControl('', [Validators.required]),
        end: new FormControl('', [Validators.required]),
      }),
      message: ['', [Validators.required, Validators.minLength(5)]],
    })
  }

  leaveRequest() {
    console.log(this.requestForm)
    const uuid = (Math.round(Date.now())).toString(20);
    this.requestData.emit({id: uuid, ...this.requestForm.value})
  }

}
