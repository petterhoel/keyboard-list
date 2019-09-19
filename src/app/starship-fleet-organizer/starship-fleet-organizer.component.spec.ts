import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipFleetOrganizerComponent } from './starship-fleet-organizer.component';

describe('StarshipFleetOrganizerComponent', () => {
  let component: StarshipFleetOrganizerComponent;
  let fixture: ComponentFixture<StarshipFleetOrganizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarshipFleetOrganizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarshipFleetOrganizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
