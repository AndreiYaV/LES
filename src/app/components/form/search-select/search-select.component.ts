import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-search-select',
  templateUrl: './search-select.component.html',
  styleUrls: ['./search-select.component.scss']
})
export class SearchSelectComponent implements OnInit{
  @Input() options: any;
  @Input() label: string = '';

  ngOnInit(): void {
    console.log(this.options)
  }
}
