import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudioTextareaComponent } from './studio-textarea.component';

describe('StudioTextareaComponent', () => {
  let component: StudioTextareaComponent;
  let fixture: ComponentFixture<StudioTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudioTextareaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudioTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
