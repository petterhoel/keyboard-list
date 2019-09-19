import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipSelectorComponent } from './starship-selector.component';

describe('StarshipSelectorComponent', () => {
  let component: StarshipSelectorComponent;
  let fixture: ComponentFixture<StarshipSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarshipSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarshipSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
