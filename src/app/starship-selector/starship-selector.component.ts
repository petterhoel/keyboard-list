import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Starship } from '../../assets/startship';
import { CheckedItemEvent } from '../checked-item-event';
import { ENTER, ESCAPE } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-starship-selector',
  templateUrl: './starship-selector.component.html',
  styleUrls: ['./starship-selector.component.scss'],
})
export class StarshipSelectorComponent implements OnInit {
  navType = 'focus';
  navigationTypes = ['focus', 'activeDecendant'];
  allStarships: Starship[] = [];
  selectedStarships: Starship[] = [];
  @Output() selectionChange = new EventEmitter<{changeType: 'canceled' | 'newSelection', selection: null | any[]}>()
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Starship[]>('/assets/starships.json')
      .subscribe(ships => this.allStarships = ships);
  }

  @HostListener('keydown', ['$event'])
  manage(event: KeyboardEvent): void {
    if (event.keyCode === ENTER) {
      this.outputSelection();
      return;
    }

    if (event.keyCode === ESCAPE) {
      this.clear();
      return;
    }
  }

  clear(): void {
    this.selectedStarships = [];
    this.selectionChange.emit({ changeType: 'canceled', selection: null });
  }

  outputSelection(): void {
    this.selectionChange.emit({ changeType: 'newSelection', selection: this.selectedStarships });
  }

  onCheckChanged(event: CheckedItemEvent): void {
    if (event.checked) {
      this.selectedStarships.push(event.item);
    } else {
      this.selectedStarships = this.selectedStarships.filter(starship => starship.name !== event.item.name);
    }
  }

}



