import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {IRequestData} from "../request-form/request-form.component";

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {
  @Input() data!: Observable<any>

  constructor() { }

  ngOnInit(): void {
    console.log(this.data)
  }

}
