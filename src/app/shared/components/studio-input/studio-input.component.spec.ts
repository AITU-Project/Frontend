import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudioInputComponent } from './studio-input.component';

describe('StudioInputComponent', () => {
  let component: StudioInputComponent;
  let fixture: ComponentFixture<StudioInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudioInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudioInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
