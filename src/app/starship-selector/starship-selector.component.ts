import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Starship } from '../../assets/startship';
import { CheckedItemEvent } from '../checked-item-event';

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
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Starship[]>('/assets/starships.json')
      .subscribe(ships => this.allStarships = ships);
  }

  clear(): void {
    if (!this.selectedStarships.length) {
      alert('No rides to clear...:/');
      return;
    }
    this.selectedStarships = [];
  }

  onCheckChanged(event: CheckedItemEvent): void {
    if (event.checked) {
      this.selectedStarships.push(event.item);
    } else {
      this.selectedStarships = this.selectedStarships.filter(starship => starship.name !== event.item.name);
    }
  }

}



