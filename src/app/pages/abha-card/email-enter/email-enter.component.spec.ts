import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailEnterComponent } from './email-enter.component';

describe('EmailEnterComponent', () => {
  let component: EmailEnterComponent;
  let fixture: ComponentFixture<EmailEnterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailEnterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailEnterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
