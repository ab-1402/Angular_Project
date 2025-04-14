import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateMatchingComponent } from './candidate-matching.component';

describe('CandidateMatchingComponent', () => {
  let component: CandidateMatchingComponent;
  let fixture: ComponentFixture<CandidateMatchingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandidateMatchingComponent]
    });
    fixture = TestBed.createComponent(CandidateMatchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
