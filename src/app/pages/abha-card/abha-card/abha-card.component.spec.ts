import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbhaCardComponent } from './abha-card.component';

describe('AbhaCardComponent', () => {
  let component: AbhaCardComponent;
  let fixture: ComponentFixture<AbhaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbhaCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbhaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
