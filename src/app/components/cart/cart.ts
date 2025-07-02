import { Component } from '@angular/core';
import { CartService } from '../../services/cart/cartService';
import { DatePipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [DatePipe, CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  constructor(private cartService: CartService) {
    console.log('Debug: ', this.cartService.getCartItems());
  }

  //Methoden, um Cart-Daten zu holen
  getCartItems() {
    return this.cartService.getCartItems();
  }

  getTotalPrice() {
    return this.cartService.getTotalPrice();
  }

  clearCart() {
    return this.cartService.clearCart();
  }
}
