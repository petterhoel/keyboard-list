import { Component, OnInit } from '@angular/core';
import { Starship } from 'src/assets/startship';
import { HttpClient } from '@angular/common/http';
import { SelectionChangeEvent } from '../starship-selector/selection-change-event';
import { FocusService } from '../focus.service';

@Component({
  selector: 'app-starship-fleet-organizer',
  templateUrl: './starship-fleet-organizer.component.html',
  styleUrls: ['./starship-fleet-organizer.component.scss']
})
export class StarshipFleetOrganizerComponent implements OnInit {
  isShopping = false;
  fleet: Starship[] = [];
  myStarships: Starship[] = [];
  constructor(private http: HttpClient, private focusService: FocusService) { }

  ngOnInit() {
    this.focusService.focusEvent$
      .subscribe(() => this.isShopping = true);
    this.http.get<Starship[]>('/assets/starships.json')
      .subscribe(ships => this.fleet = ships);
  }

  updateFleet(selectionChange: SelectionChangeEvent): void {
    if (selectionChange.changeType === 'newSelection') {
      this.myStarships = selectionChange.selection;
    }
    this.isShopping = false;
  }

  goShopping(): void {
    this.isShopping = true;
  }

}
