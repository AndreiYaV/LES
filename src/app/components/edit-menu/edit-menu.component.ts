import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Requests} from "../../interfaces/requests.interface";
import IRequest = Requests.IRequest;
import {ModalConfirmComponent} from "../modals/modal-confirm/modal-confirm.component";
import {ModalEditComponent} from "../modals/modal-edit/modal-edit.component";
import {ActivatedRoute} from "@angular/router";
import IRequestType = Requests.IRequestType;
import {RequestService} from "../../services/request.service";

@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.scss'],
})
export class EditMenuComponent implements OnInit {
  @Input() cardData!: IRequest
  requestTypes: IRequestType[] = [];

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private requestService: RequestService
  ) {}

  openDialogEdit() {
    this.dialog.open(ModalEditComponent, {
      data: this.requestTypes
    });
  }

  openDialogDelete() {
    const dialogRef = this.dialog.open(ModalConfirmComponent, {
      data: this.cardData.id
    });
    dialogRef.afterClosed().subscribe(data => {
      this.requestService.deleteRequest(data).subscribe()
    })
  }

  ngOnInit(): void {
    this.requestTypes = this.route.snapshot.data.requests;
  }
}
