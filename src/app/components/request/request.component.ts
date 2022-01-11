import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Requests} from "../../interfaces/requests.interface";
import IRequest = Requests.IRequest;

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RequestComponent {
  @Input() requests!: IRequest[]
}
