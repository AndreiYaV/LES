import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {IRequestData} from "../request-form/request-form.component";

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {
  @Input() data!: Observable<IRequestData>
  requestData: IRequestData[] = [];

  constructor() { }

  ngOnInit(): void {
    this.data.subscribe(req => this.requestData.push(req))
  }

}
