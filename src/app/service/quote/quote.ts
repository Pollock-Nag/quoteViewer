import { Injectable } from '@angular/core';

export interface Quote {
  id: string;
  text: string;
  author: string;
}

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  private quotes: Quote[] = [
    { id: '1', text: 'The only way to do great work is to love what you do.', author: 'Steve Jobs' },
    { id: '2', text: 'Life is what happens when you\'re busy making other plans.', author: 'John Lennon' },
    { id: '3', text: 'The future belongs to those who believe in the beauty of their dreams.', author: 'Eleanor Roosevelt' },
    { id: '4', text: 'It is during our darkest moments that we must focus to see the light.', author: 'Aristotle' },
    { id: '5', text: 'Do not go where the path may lead, go instead where there is no path and leave a trail.', author: 'Ralph Waldo Emerson' }
  ];

  getAllQuotes(): Quote[] {
    return this.quotes;
  }

  getQuoteById(id: string): Quote | undefined {
    return this.quotes.find(q => q.id === id);
  }
}
