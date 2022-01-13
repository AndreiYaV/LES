import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Requests} from "../../interfaces/requests.interface";
import {ModalConfirmComponent} from "../modals/modal-confirm/modal-confirm.component";
import {ModalEditComponent} from "../modals/modal-edit/modal-edit.component";
import {ActivatedRoute} from "@angular/router";
import {RequestService} from "../../services/request.service";
import IRequest = Requests.IRequest;
import IRequestType = Requests.IRequestType;
import {IEmployee} from "../../interfaces/employee.interface";

@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.scss'],
})
export class EditMenuComponent implements OnInit {
  @Input() cardData!: IRequest;
  @Output() valueChange: EventEmitter<IEmployee> = new EventEmitter<IEmployee>()
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
      this.requestService.getRequests().subscribe(request => {
        request.requests = request.requests?.filter((request) => request.id !== data)
        this.requestService.createRequest(request as any)
          .subscribe(() => this.valueChange.emit(request))
      })
    })
  }

  ngOnInit(): void {
    this.requestTypes = this.route.snapshot.data.requests;
  }
}
