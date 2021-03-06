import { Component, Input, ElementRef, ViewChildren, ViewChild, Output, EventEmitter, OnInit, AfterViewInit } from '@angular/core';
import { FocusableOption, Highlightable } from '@angular/cdk/a11y';
import { MatCheckbox, MatCheckboxChange } from '@angular/material/checkbox';
import { CheckedItemEvent } from '../checked-item-event';

@Component({
  selector: 'app-my-list-item',
  // tslint:disable-next-line:no-host-metadata-property
  host: {
    tabindex: '-1',
    role: 'list-item',
  },
  templateUrl: './my-list-item.component.html',
  styleUrls: ['./my-list-item.component.scss']
})
export class MyListItemComponent implements Highlightable {
  @Input() item: any;
  @Input() displayProperty: string;
  @Output() checkChanged = new EventEmitter<CheckedItemEvent>();
  @ViewChild('check', { static: false }) check: MatCheckbox;
  active = false;

  disabled: boolean;

  constructor(private element: ElementRef) {
  }

  emit(event: MatCheckboxChange): void {
    this.checkChanged.emit({ item: this.item, checked: event.checked });
  }

  setActiveStyles(): void {
    this.check.focus();
    this.active = true;
  }
  setInactiveStyles(): void {
    this.active = false;
  }
}
