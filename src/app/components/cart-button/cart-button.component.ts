// src/app/components/cart-button/cart-button.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CartService } from '../../services/cart.service';
import { CartDialogComponent } from '../cart-dialog/cart-dialog.component';

@Component({
  selector: 'app-cart-button',
  standalone: true,
  imports: [CommonModule, RouterModule, MatDialogModule],
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.scss']
})
export class CartButtonComponent implements OnInit {
  cartCount: number = 0;

  constructor(private cartService: CartService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.cartService.cartCount$.subscribe(count => {
      this.cartCount = count;
    });
  }

  openCartDialog(): void {
    const cartProducts = this.cartService.getCart();
    this.dialog.open(CartDialogComponent, {
      width: '400px',
      data: cartProducts
    });
  }
}
