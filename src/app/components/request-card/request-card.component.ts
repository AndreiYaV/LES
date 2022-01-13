import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Requests} from "../../interfaces/requests.interface";
import IRequest = Requests.IRequest;
import {DictionaryService} from "../../services/dictionary.service";
import IRequestType = Requests.IRequestType;
import {IEmployee} from "../../interfaces/employee.interface";

@Component({
  selector: 'app-request-card',
  templateUrl: './request-card.component.html',
  styleUrls: ['./request-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RequestCardComponent {
  @Input() set cardData(request: IRequest) {
    this._cardData = request;
    this.requestTypes = this.dictionaryService.getData('requestTypes')
      .find(requestType => requestType.id === request.type_id)?.name
  }
  @Output() updateChange: EventEmitter<IEmployee> = new EventEmitter<IEmployee>()

  _cardData!: IRequest;
  requestTypes!: IRequestType[];
  currentDate = new Date();

  constructor(private dictionaryService: DictionaryService) {}

  valueChange(event: IEmployee) {
    this.updateChange.emit(event)
  }
}
