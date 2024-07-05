// src/app/services/cart.service.ts
import { Injectable } from '@angular/core';
import { Product } from './product.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Product[] = [];
  private cartCount = new BehaviorSubject<number>(0);

  cartCount$ = this.cartCount.asObservable();

  constructor() { }

  addToCart(product: Product): void {
    this.cart.push(product);
    this.cartCount.next(this.cart.length);
  }

  getCart(): Product[] {
    return this.cart;
  }

  getCartCount(): number {
    return this.cart.length;
  }

  clearCart(): void {
    this.cart = [];
    this.cartCount.next(0);
  }
}
