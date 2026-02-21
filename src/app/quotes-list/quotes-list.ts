import { Component, inject } from '@angular/core';
import { QuoteService } from '../service/quote/quote';
import { CommonModule } from '@angular/common';
import { QuoteItem } from '../quote-item/quote-item';
import { Quote } from '../service/quote/quote';

@Component({
  selector: 'app-quotes-list',
  imports: [CommonModule, QuoteItem],
  templateUrl: './quotes-list.html',
  styleUrl: './quotes-list.scss',
})
export class QuotesList {
  private quoteService = inject(QuoteService);
  quotes = this.quoteService.getAllQuotes();

  onQuoteSelected(quote: Quote) {
    console.log('User clicked on quote:', quote);
  }
}
