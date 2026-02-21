import { Component, inject, OnInit } from '@angular/core';
import { QuoteService, Quote } from '../service/quote/quote';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-quote-details',
  imports: [RouterLink],
  templateUrl: './quote-details.html',
  styleUrl: './quote-details.scss',
})
export class QuoteDetails implements OnInit {
  quote: Quote | undefined;

  private route = inject(ActivatedRoute);
  private quoteService = inject(QuoteService);

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.quote = this.quoteService.getQuoteById(id);
    }
  }
}
