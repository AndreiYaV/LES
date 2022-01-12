import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Requests} from "../../interfaces/requests.interface";
import IRequestType = Requests.IRequestType;
import {RequestService} from "../../services/request.service";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RequestsComponent implements OnInit {
  requestTypes: IRequestType[] = [];
  requests: Requests.IRequest[] = [];

  constructor(
    private route: ActivatedRoute,
    private requestService: RequestService,
    private cdr: ChangeDetectorRef,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.requestTypes = this.route.snapshot.data.requests
    this.requestService.getRequests()
      .subscribe(req => {
        (this.requests as any) = req.requests
        this.cdr.markForCheck()
      })
  }

  sendRequest(req: any) {
    this.userService.getCurrentUser().subscribe(user => {
      if (user.requests) {
        user.requests.push(req)
        this.requestService.createRequest(user as any).subscribe(() => {
          this.requestService.getRequests()
            .subscribe(req => (this.requests as any) = req.requests)
        })
      }
    })
  }
}
