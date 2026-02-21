import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../service/quote/quote';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-quote-item',
  imports: [CommonModule, RouterLink],
  templateUrl: './quote-item.html',
  styleUrl: './quote-item.scss',
})
export class QuoteItem {
  @Input({ required: true }) quote!: Quote;
  @Input() index!: number;

  @Output() quoteSelected = new EventEmitter<Quote>();

  onSelect() {
    this.quoteSelected.emit(this.quote);
  }
}
