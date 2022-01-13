import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Requests} from "../../interfaces/requests.interface";
import IRequestType = Requests.IRequestType;
import {RequestService} from "../../services/request.service";
import {UserService} from "../../services/user.service";
import {DictionaryService} from "../../services/dictionary.service";
import IRequest = Requests.IRequest;

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss'],
})
export class RequestsComponent implements OnInit {
  requestTypes: IRequestType[] = [];
  requests: IRequest[] = [];

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
        (this.requests as any) = req.requests
      })
  }

  sendRequest(req: any) {
    this.userService.currentUser$.subscribe(user => {
      user.requests ? user.requests.push(req) : user.requests = [req];
        this.requestService.createRequest(user as any).subscribe(() => {
          this.requestService.getRequests()
            .subscribe(req => (this.requests as any) = req.requests)
        })
    })
  }

  updateChange(event: any) {
    this.requestService.getRequests().subscribe( response => {
        (this.requests as any) = response.requests
    })
  }
}
