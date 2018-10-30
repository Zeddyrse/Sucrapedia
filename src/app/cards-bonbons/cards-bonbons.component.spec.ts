import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsBonbonsComponent } from './cards-bonbons.component';

describe('CardsBonbonsComponent', () => {
  let component: CardsBonbonsComponent;
  let fixture: ComponentFixture<CardsBonbonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsBonbonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsBonbonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
