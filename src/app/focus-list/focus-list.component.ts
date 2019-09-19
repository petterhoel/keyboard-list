import { Component, OnInit, AfterContentInit, ContentChildren, QueryList, HostListener } from '@angular/core';
import { FocusListItemComponent } from '../focus-list-item/focus-list-item.component';
import { FocusKeyManager } from '@angular/cdk/a11y';

@Component({
  selector: 'app-focus-list',
  templateUrl: './focus-list.component.html',
  styleUrls: ['./focus-list.component.scss']
})
export class FocusListComponent implements AfterContentInit {


  @ContentChildren(FocusListItemComponent)
  items: QueryList<FocusListItemComponent>;

  private keyManager: FocusKeyManager<FocusListItemComponent>;


  @HostListener('keydown', ['$event'])
  manage(event: KeyboardEvent) {
    this.keyManager.onKeydown(event);
  }

  ngAfterContentInit(): void {

    this.keyManager = new FocusKeyManager(this.items).withWrap();
  }

}
