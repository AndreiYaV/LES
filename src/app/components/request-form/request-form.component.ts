import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Requests} from "../../interfaces/requests.interface";
import IRequestType = Requests.IRequestType;
import IRequest = Requests.IRequest;

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RequestFormComponent implements OnInit {
  @Input() formView: boolean = true;
  @Input() requestTypes!: IRequestType[];
  @Output() requestData:  EventEmitter<IRequest> = new EventEmitter<IRequest>()
  @Output() onClose: EventEmitter<boolean> = new EventEmitter<boolean>()

  requestForm!: FormGroup;
  type_id!: FormControl;
  range!: FormGroup;
  minimalValue: Date = new Date();

  constructor(
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.requestForm = this.fb.group({
      type_id: this.type_id = new FormControl('', [Validators.required]),
      range: this.range = new FormGroup({
        start: new FormControl('', [Validators.required]),
        end: new FormControl('', [Validators.required]),
      }),
      comment: ['', [Validators.required, Validators.minLength(5)]],
    })
  }

  daysCounter(end: Date, start: Date): number {
    return Math.floor(((end.getTime() - start.getTime()) / 1000 / 60 / 60 / 24) + 1);
  }

  leaveRequest() {
    if(!this.requestForm.valid) {
      return
    }
    const uuid = (Math.round(Date.now())).toString(20);
    const req = {
          id: uuid,
          type_id: this.requestForm.controls.type_id.value,
          created: new Date(),
          start_date: this.requestForm.controls.range.value.start,
          end_date: this.requestForm.controls.range.value.end,
          comment: this.requestForm.controls.comment.value,
          days: this.daysCounter(
            this.requestForm.controls.range.value.end,
            this.requestForm.controls.range.value.start)
        }
    this.requestData.emit(req)
  }

  onNoClick() {
    this.onClose.emit(true)
  }
}
