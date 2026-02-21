import { Routes } from '@angular/router';
import { QuotesList } from './quotes-list/quotes-list';
import { QuoteDetails } from './quote-details/quote-details';

export const routes: Routes = [
    { path: '', redirectTo: '/quotes', pathMatch: 'full' },
    { path: 'quotes', component: QuotesList },
    { path: 'quotes/:id', component: QuoteDetails }
];
