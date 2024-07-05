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
    const existingProduct = this.cart.find(item => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity! += 1;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }

    const totalItems = this.cart.reduce((count, item) => count + (item.quantity || 0), 0);
    this.cartCount.next(totalItems);
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
