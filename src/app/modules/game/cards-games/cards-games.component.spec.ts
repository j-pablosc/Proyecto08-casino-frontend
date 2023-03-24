import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsGamesComponent } from './cards-games.component';

describe('CardsGamesComponent', () => {
  let component: CardsGamesComponent;
  let fixture: ComponentFixture<CardsGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsGamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
