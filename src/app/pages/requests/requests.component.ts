import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Requests} from "../../interfaces/requests.interface";
import IRequestType = Requests.IRequestType;
import {RequestService} from "../../services/request.service";
import {UserService} from "../../services/user.service";
import {DictionaryService} from "../../services/dictionary.service";
import IRequest = Requests.IRequest;
import {switchMap, tap} from "rxjs/operators";

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss'],
})
export class RequestsComponent implements OnInit {
  requestTypes: IRequestType[] = [];
  requests: Requests.IRequest[] = [];
  actualRequests: Requests.IRequest[] = [];
  passedRequests: Requests.IRequest[] = [];

  constructor(
    private route: ActivatedRoute,
    private requestService: RequestService,
    private userService: UserService,
    private dictionaryService: DictionaryService
  ) {}

  ngOnInit(): void {
    this.requestTypes = this.route.snapshot.data.requests
    this.dictionaryService.setData('requestTypes', this.requestTypes)
    this.requestService.getRequests()
      .subscribe(req => {
        (this.requests as IRequest[] | undefined) = req.requests
        this.sortRequests(this.requests)
      })
  }

  private sortRequests(requests: IRequest[]): IRequest[] {
    return requests.filter(request => {
      if (new Date(request.end_date).getTime() > Date.now()) {
        this.actualRequests.push(request)
      } else {
        this.passedRequests.push(request)
      }
    });
  }

  sendRequest(req: IRequest) {
   this.clearRequests()
    this.userService.currentUser$.pipe(
      tap(user => {
        if (user.requests) {
          user.requests.push(req)
        } else {
          user.requests = [req]
        }
      }),
      switchMap(user => this.requestService.createRequest(user).pipe(
        tap(response => {
          (this.requests as IRequest[] | undefined) = response.requests
        }))),
      switchMap(user => this.userService.addUserRequest(user).pipe(
      ))
    ).subscribe(() => this.sortRequests(this.requests))
  }

  updateChange(event: any) {
    this.clearRequests()
    this.requestService.getRequests().subscribe( response => {
        (this.requests as any) = response.requests
      this.sortRequests(this.requests)
    })
  }

  clearRequests() {
    this.requests = [];
    this.actualRequests = [];
    this.passedRequests = [];
  }
}
