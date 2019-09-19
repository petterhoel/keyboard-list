import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CheckedItemEvent } from '../checked-item-event';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-focus-list-item',
  templateUrl: './focus-list-item.component.html',
  styleUrls: ['./focus-list-item.component.scss']
})
export class FocusListItemComponent implements OnInit {
  @Input() item: any;
  @Input() displayProperty: string;
  @Output() checkChanged = new EventEmitter<CheckedItemEvent>();
  constructor() { }

  ngOnInit() {
  }


  emit(event: MatCheckboxChange): void {
    this.checkChanged.emit({ item: this.item, checked: event.checked });
  }
}
