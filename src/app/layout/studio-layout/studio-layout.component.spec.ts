import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudioLayoutComponent } from './studio-layout.component';

describe('StudioLayoutComponent', () => {
  let component: StudioLayoutComponent;
  let fixture: ComponentFixture<StudioLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudioLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudioLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
