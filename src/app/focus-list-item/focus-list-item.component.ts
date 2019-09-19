import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { CheckedItemEvent } from '../checked-item-event';
import { MatCheckboxChange, MatCheckbox } from '@angular/material/checkbox';
import { FocusableOption, FocusOrigin } from '@angular/cdk/a11y';

@Component({
  selector: 'app-focus-list-item',
  templateUrl: './focus-list-item.component.html',
  styleUrls: ['./focus-list-item.component.scss']
})
export class FocusListItemComponent implements FocusableOption {

  @Input() item: any;
  @Input() displayProperty: string;
  @Output() checkChanged = new EventEmitter<CheckedItemEvent>();
  disabled?: boolean;
  @ViewChild('check', { static: false }) check: MatCheckbox;


  focus(origin?: FocusOrigin): void {
    this.check.focus();
  }
  getLabel?(): string {
    return this.item[this.displayProperty];
  }




  emit(event: MatCheckboxChange): void {
    this.checkChanged.emit({ item: this.item, checked: event.checked });
  }
}
