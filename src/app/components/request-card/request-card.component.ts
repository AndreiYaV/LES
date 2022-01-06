import {Component, Input} from '@angular/core';
import {IRequestData} from "../request-form/request-form.component";

@Component({
  selector: 'app-request-card',
  templateUrl: './request-card.component.html',
  styleUrls: ['./request-card.component.scss']
})
export class RequestCardComponent{
  @Input() cardData!: IRequestData
}
