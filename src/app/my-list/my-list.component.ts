import { Component, AfterContentInit, ContentChildren, QueryList, HostListener } from '@angular/core';
import { FocusKeyManager, ActiveDescendantKeyManager } from '@angular/cdk/a11y';
import { MyListItemComponent } from '../my-list-item/my-list-item.component';

@Component({
  selector: 'app-my-list',
  // tslint:disable-next-line:no-host-metadata-property
  host: { 'tabindex': '1' },
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.scss']
})
export class MyListComponent implements AfterContentInit {
  // 1. Query all child elements
  @ContentChildren(MyListItemComponent, { descendants: true })
  items: QueryList<MyListItemComponent>;

  // FocusKeyManager instance
  private keyManager: ActiveDescendantKeyManager<MyListItemComponent>;

  @HostListener('keydown', ['$event'])
  manage(event) {
    this.keyManager.onKeydown(event);
  }

  ngAfterContentInit(): void {

    this.keyManager = new ActiveDescendantKeyManager(this.items).withWrap();

  }
}
