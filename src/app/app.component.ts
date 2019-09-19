import { Component, HostListener } from '@angular/core';
import { FocusService } from './focus.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  /**
   *
   */
  constructor(private focusService: FocusService) { }


  @HostListener('document:keydown', ['$event'])
  handle(event: KeyboardEvent) {
    if (event.keyCode !== 115) {
      return;
    }
    this.triggerFocus();

    }

  triggerFocus(): void {
    this.focusService.announceFocus();
  }
}
