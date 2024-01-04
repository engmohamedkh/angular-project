import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPageCardComponent } from './all-page-card.component';

describe('AllPageCardComponent', () => {
  let component: AllPageCardComponent;
  let fixture: ComponentFixture<AllPageCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllPageCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllPageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
