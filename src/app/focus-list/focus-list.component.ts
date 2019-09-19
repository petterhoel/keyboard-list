import { Component, OnInit, AfterContentInit, ContentChildren, QueryList, HostListener } from '@angular/core';
import { FocusListItemComponent } from '../focus-list-item/focus-list-item.component';
import { FocusKeyManager } from '@angular/cdk/a11y';
import { FocusService } from '../focus.service';

@Component({
  selector: 'app-focus-list',
  templateUrl: './focus-list.component.html',
  styleUrls: ['./focus-list.component.scss']
})
export class FocusListComponent implements OnInit,  AfterContentInit {


  @ContentChildren(FocusListItemComponent)
  items: QueryList<FocusListItemComponent>;

  private keyManager: FocusKeyManager<FocusListItemComponent>;


  @HostListener('keydown', ['$event'])
  manage(event: KeyboardEvent) {
    this.keyManager.onKeydown(event);
  }
  constructor(private focusService: FocusService) { }

  ngOnInit(): void {
    this.focusService.focusEvent$.subscribe(() => this.focusFirst())
  }

  ngAfterContentInit(): void {

    this.keyManager = new FocusKeyManager(this.items).withWrap();
  }

  focusFirst(): void {
    this.keyManager.setFirstItemActive()
  }
}


