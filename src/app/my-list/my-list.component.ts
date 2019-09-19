import { Component, AfterContentInit, ContentChildren, QueryList, HostListener, OnInit } from '@angular/core';
import { FocusKeyManager, ActiveDescendantKeyManager } from '@angular/cdk/a11y';
import { MyListItemComponent } from '../my-list-item/my-list-item.component';
import { FocusService } from '../focus.service';

@Component({
  selector: 'app-my-list',
  // tslint:disable-next-line:no-host-metadata-property
  host: { 'tabindex': '1' },
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.scss']
})
export class MyListComponent implements OnInit, AfterContentInit {
  // 1. Query all child elements
  @ContentChildren(MyListItemComponent, { descendants: true })
  items: QueryList<MyListItemComponent>;

  // FocusKeyManager instance
  private keyManager: ActiveDescendantKeyManager<MyListItemComponent>;

  @HostListener('keydown', ['$event'])
  manage(event: KeyboardEvent) {
    this.keyManager.onKeydown(event);
  }

  constructor(private focusService: FocusService) { }

  ngOnInit(): void {
    this.focusService.focusEvent$.subscribe(() => this.focusFirst())
  }

  ngAfterContentInit(): void {
    this.keyManager = new ActiveDescendantKeyManager(this.items).withWrap();
  }

  focusFirst(): void {
    this.keyManager.setFirstItemActive();
  }
}
