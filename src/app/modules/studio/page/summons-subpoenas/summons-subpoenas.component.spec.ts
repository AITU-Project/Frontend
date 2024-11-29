import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummonsSubpoenasComponent } from './summons-subpoenas.component';

describe('SummonsSubpoenasComponent', () => {
  let component: SummonsSubpoenasComponent;
  let fixture: ComponentFixture<SummonsSubpoenasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SummonsSubpoenasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SummonsSubpoenasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
