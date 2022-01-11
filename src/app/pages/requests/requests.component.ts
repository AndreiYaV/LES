import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Requests} from "../../interfaces/requests.interface";
import {Observable, Subject} from "rxjs";
import IRequestType = Requests.IRequestType;

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RequestsComponent implements OnInit {
  requestTypes: IRequestType[] = [];

  private requestData$: Subject<any> = new Subject<any>();
  public requestData$$: Observable<any> = this.requestData$ as Observable<any>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.requestTypes = this.route.snapshot.data.requests
  }

  getRequest(event: any) {
    this.requestData$.next(event)
  }
}
