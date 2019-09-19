import { Component, OnInit, AfterContentInit, ContentChildren, QueryList, HostListener, AfterViewInit } from '@angular/core';
import { FocusListItemComponent } from '../focus-list-item/focus-list-item.component';
import { FocusKeyManager } from '@angular/cdk/a11y';
import { FocusService } from '../focus.service';
import {TAB, ENTER, ESCAPE} from '@angular/cdk/keycodes';


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
  manage(event: KeyboardEvent): void {

    // tslint:disable: deprecation
    if (event.keyCode === TAB) {
      event.preventDefault();
      console.log('TAB');
      return;
    }
    if (event.keyCode === ENTER) {
      console.log('ENTER');
      return;
    }

    if (event.keyCode === ESCAPE) {
      console.log('ESCAPE');
      return;
    }


    this.keyManager.onKeydown(event);
    // TODO: theres got to be a better way
    this.keyManager.activeItem.check._elementRef.nativeElement.scrollIntoView();
  }
  constructor(private focusService: FocusService) { }

  ngOnInit(): void {
    this.focusService.focusEvent$.subscribe(() => this.focusFirst())
  }

  ngAfterContentInit(): void {
    this.keyManager = new FocusKeyManager(this.items).withWrap();
    this.focusFirst();
  }

  focusFirst(): void {
    this.keyManager.setFirstItemActive();
    // TODO: theres got to be a better way
    this.keyManager.activeItem.check._elementRef.nativeElement.scrollIntoView();
  }
}


