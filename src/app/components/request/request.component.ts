import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {IRequestData} from "../request-form/request-form.component";
import {RequestService} from "../../services/request.service";

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RequestComponent implements OnInit {
  @Input() data!: Observable<IRequestData>
  requestData: IRequestData[] = [];

  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
    this.data.subscribe(req => {
      this.requestService.createRequest(req as any)
      this.requestData.push(req)
    })
  }
}
