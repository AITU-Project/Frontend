import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthRadioComponent } from './auth-radio.component';

describe('AuthRadioComponent', () => {
  let component: AuthRadioComponent;
  let fixture: ComponentFixture<AuthRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthRadioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
