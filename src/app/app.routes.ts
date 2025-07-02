import { Routes } from '@angular/router';
import { EventDisplay } from './components/event-display/event-display';
import { Cart } from './components/cart/cart';

export const routes: Routes = [
  { path: '', component: EventDisplay }, // http://localhost:3000/
  { path: 'events', component: EventDisplay }, // http://localhost:3000/events
  { path: 'cart', component: Cart }, // http://localhost:3000/cart
  { path: '**', redirectTo: '' }, // Fallback für unbekannte URLs
];
