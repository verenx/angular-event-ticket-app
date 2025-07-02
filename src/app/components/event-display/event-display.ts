import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from '../../services/cart/cartService';

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

  //dependency injection
  constructor(private cartService: CartService) {}

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

  // addToCart() {
  //   if (this.selectedTickets > 0) {
  //     alert(`Added ${this.selectedTickets} ticket(s) to cart`);
  //   }
  // }

  addToCart() {
    if (this.selectedTickets > 0) {
      const message = this.cartService.addToCart(
        this.eventName,
        this.selectedTickets,
        this.ticketPrice
      );
      alert(message);
      this.selectedTickets = 0;
    } else {
      alert('Bitte wähle mindestens ein Ticket aus');
    }
  }
}
