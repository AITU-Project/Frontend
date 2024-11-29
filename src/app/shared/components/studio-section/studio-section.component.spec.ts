import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudioSectionComponent } from './studio-section.component';

describe('StudioSectionComponent', () => {
  let component: StudioSectionComponent;
  let fixture: ComponentFixture<StudioSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudioSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudioSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
