import {Component, Inject} from '@angular/core';
import {Requests} from "../../../interfaces/requests.interface";
import IRequestType = Requests.IRequestType;
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.scss']
})
export class ModalEditComponent {
  constructor(
    public dialogRef: MatDialogRef<string>,
    @Inject(MAT_DIALOG_DATA) public data: IRequestType[]
  ) {}

  sendRequest(event: Requests.IRequest) {
  }

  closeModal($event: boolean) {
    this.dialogRef.close()
  }
}
