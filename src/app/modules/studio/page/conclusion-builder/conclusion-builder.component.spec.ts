import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConclusionBuilderComponent } from './conclusion-builder.component';

describe('ConclusionBuilderComponent', () => {
  let component: ConclusionBuilderComponent;
  let fixture: ComponentFixture<ConclusionBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConclusionBuilderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConclusionBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
