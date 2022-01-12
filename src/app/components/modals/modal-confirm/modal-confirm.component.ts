import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.scss']
})
export class ModalConfirmComponent {
  constructor(
    public dialogRef: MatDialogRef<string>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {}

  onNoClick() {
    this.dialogRef.close()
  }
}
