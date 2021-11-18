import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChanceOfRainComponent } from './chance-of-rain.component';

describe('ChanceOfRainComponent', () => {
  let component: ChanceOfRainComponent;
  let fixture: ComponentFixture<ChanceOfRainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChanceOfRainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChanceOfRainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
