import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FocusService {
  private focusEventSource$ = new Subject();
  public focusEvent$ = this.focusEventSource$.asObservable();
  public announceFocus(): void {
    this.focusEventSource$.next();
  }
}
