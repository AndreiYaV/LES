import {Component, Input} from '@angular/core';
import {IEmployee} from "../../interfaces/employee.interface";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() searchResults!: IEmployee[];
}
