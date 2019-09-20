import { Component,  Output, EventEmitter, HostListener, Input, ViewChild, ElementRef } from '@angular/core';
import { Starship } from '../../assets/startship';
import { CheckedItemEvent } from '../checked-item-event';
import { ENTER, ESCAPE } from '@angular/cdk/keycodes';
import { SelectionChangeEvent } from './selection-change-event';
import { fromEvent } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-starship-selector',
  templateUrl: './starship-selector.component.html',
  styleUrls: ['./starship-selector.component.scss'],
})
export class StarshipSelectorComponent {
  @Input() set allStarships(ships: Starship[]) {
    this._filteredStarShips = ships;
    this.originalShips = ships.map(ship => ship);
  }

  get allStarships(): Starship[] {
    return this._filteredStarShips;
  }
  // tslint:disable-next-line:variable-name
  private originalShips: Starship[] = [];
  _filteredStarShips: Starship[] = [];
  _selectedStarShips: Starship[] = [];
  @Input() set selectedStarships(ships: Starship[]) {
    this._selectedStarShips = ships.map(ship => ship);
  }
  get selectedStarShips(): Starship[] {
    return this._selectedStarShips;
  }
  @Output() selectionChanged = new EventEmitter<SelectionChangeEvent>();

  @ViewChild('search', {static: false}) searchQuery: ElementRef;

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
  /**
   *
   */
  ngAfterViewInit(): void {
    fromEvent(this.searchQuery.nativeElement, 'keyup')
      .pipe(
        map((event: any) => {
          return event.target.value;
        })
        // Time in milliseconds between key events
        , debounceTime(100)
        // If previous query is diffent from current
        , distinctUntilChanged()
        // subscription for response
      ).subscribe(query => this.filterByQuery(query));
  }


  private filterByQuery(query: string): void {
    this._filteredStarShips = this.originalShips.filter(ship => ship['name'].toLocaleLowerCase().includes(query.toLocaleLowerCase())).map(ship => ship);

  }

  clear(): void {
    this.selectedStarships = [];
    this.selectionChanged.emit({ changeType: 'canceled', selection: null });
  }

  outputSelection(): void {
    this.selectionChanged.emit({ changeType: 'newSelection', selection: this.selectedStarShips });
  }

  inSelectedItems(ship: Starship): boolean {
    return this._selectedStarShips.find(s => ship.name === s.name) !== undefined;
  }

  onCheckChanged(event: CheckedItemEvent): void {
    if (event.checked) {
      this._selectedStarShips.push(event.item);
    } else {
      this.selectedStarships = this._selectedStarShips.filter(starship => starship.name !== event.item.name);
    }
  }

}



