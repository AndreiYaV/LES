import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Requests} from "../../services/interfaces/requests.interface";
import IRequestType = Requests.IRequestType;

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {
  requestTypes!: IRequestType[];
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe(res => this.requestTypes = res.data)
  }

}
