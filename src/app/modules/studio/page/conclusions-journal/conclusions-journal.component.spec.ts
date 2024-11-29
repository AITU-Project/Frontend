import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConclusionsJournalComponent } from './conclusions-journal.component';

describe('ConclusionsJournalComponent', () => {
  let component: ConclusionsJournalComponent;
  let fixture: ComponentFixture<ConclusionsJournalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConclusionsJournalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConclusionsJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
