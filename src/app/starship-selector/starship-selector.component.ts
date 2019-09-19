import { Component,  Output, EventEmitter, HostListener, Input } from '@angular/core';
import { Starship } from '../../assets/startship';
import { CheckedItemEvent } from '../checked-item-event';
import { ENTER, ESCAPE } from '@angular/cdk/keycodes';
import { SelectionChangeEvent } from './selection-change-event';

@Component({
  selector: 'app-starship-selector',
  templateUrl: './starship-selector.component.html',
  styleUrls: ['./starship-selector.component.scss'],
})
export class StarshipSelectorComponent {
  @Input() allStarships: Starship[] = [];
  // tslint:disable-next-line:variable-name
  _selectedStarShips: Starship[] = [];
  @Input() set selectedStarships(ships: Starship[]) {
    this._selectedStarShips = ships.map(ship => ship);
  }
  get selectedStarShips(): Starship[] {
    return this._selectedStarShips;
  }
  @Output() selectionChanged = new EventEmitter<SelectionChangeEvent>();


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



