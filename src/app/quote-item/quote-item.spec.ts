import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteItem } from './quote-item';

describe('QuoteItem', () => {
  let component: QuoteItem;
  let fixture: ComponentFixture<QuoteItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuoteItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuoteItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
