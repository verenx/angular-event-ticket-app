import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  //here we store data
  //propertyName = value;
  private cartItems: any[] = [];
  private totalPrice: number = 0;

  constructor() {}

  addToCart(eventName: string, quantity: number, pricePerTicket: number) {
    const totalCost = quantity * pricePerTicket;

    //ein Item Objekt mit allen wichtigen Infos dazu erstellen
    const item = {
      eventName: eventName,
      quantity: quantity,
      pricePerTicket: pricePerTicket,
      totalCost: totalCost,
      dateAdded: new Date(),
    };

    //das Item zum Array hinzufügen, push fügt am Ende des Arrays hinzu
    this.cartItems.push(item);

    //Gesamtpreis berechnen weil neues Item dazugekommen ist
    this.calculateTotalPrice();

    //Bestätigungsnachricht zurückgeben
    return `Added ${quantity} ticket(s) for ${eventName} to cart!`;
  }

  calculateTotalPrice() {
    let priceSum = 0;
    for (let i = 0; i < this.cartItems.length; i++) {
      priceSum += this.cartItems[i].totalCost;
    }

    this.totalPrice = priceSum;
  }

  clearCart() {
    this.cartItems = [];
    this.totalPrice = 0;
  }

  getCartItems() {
    return this.cartItems;
  }

  getTotalPrice() {
    return this.totalPrice;
  }
}
