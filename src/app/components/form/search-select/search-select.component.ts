import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-search-select',
  templateUrl: './search-select.component.html',
  styleUrls: ['./search-select.component.scss']
})
export class SearchSelectComponent {
  @Input() options: any;
  @Input() label: string = '';
}
