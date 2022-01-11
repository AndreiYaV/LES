import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Requests} from "../../interfaces/requests.interface";
import IRequest = Requests.IRequest;

@Component({
  selector: 'app-request-card',
  templateUrl: './request-card.component.html',
  styleUrls: ['./request-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RequestCardComponent {
  @Input() cardData!: IRequest
  currentDate = new Date();
}
