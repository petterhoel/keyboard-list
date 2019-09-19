import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusListItemComponent } from './focus-list-item.component';

describe('FocusListItemComponent', () => {
  let component: FocusListItemComponent;
  let fixture: ComponentFixture<FocusListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FocusListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FocusListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
