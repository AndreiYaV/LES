import {Component, Inject, OnInit} from '@angular/core';
import {Requests} from "../../../interfaces/requests.interface";
import IRequestType = Requests.IRequestType;
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.scss']
})
export class ModalEditComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: IRequestType[]) {}

  ngOnInit(): void {
    console.log(this.data)
  }

  sendRequest($event: Requests.IRequest) {
  }
}
