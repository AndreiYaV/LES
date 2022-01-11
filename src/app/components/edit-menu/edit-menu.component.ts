import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
