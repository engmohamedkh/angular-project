import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopCardSummaryComponent } from './shop-card-summary.component';

describe('ShopCardSummaryComponent', () => {
  let component: ShopCardSummaryComponent;
  let fixture: ComponentFixture<ShopCardSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopCardSummaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShopCardSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
