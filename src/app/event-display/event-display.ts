import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-event-display',
  imports: [DatePipe],
  templateUrl: './event-display.html',
  styleUrl: './event-display.css',
})
export class EventDisplay {
  eventName = 'Summer Music Festival';
  eventDate = '2025-08-12';
  eventVenue = 'Central Park';
  ticketPrice = 76;
  selectedTickets = 0;
  totalPrice = 0;

  increaseTickets() {
    this.selectedTickets++;
    this.calculateTotal();
  }

  decreaseTickets() {
    if (this.selectedTickets > 0) {
      this.selectedTickets--;
    }
    this.calculateTotal();
  }

  calculateTotal() {
    this.totalPrice = this.selectedTickets * this.ticketPrice;
  }

  addToCart() {
    if (this.selectedTickets > 0) {
      alert(`Added ${this.selectedTickets} ticket(s) to cart`);
    }
  }
}
