// src/app/components/cart-dialog/cart-dialog.component.ts

import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { Product } from '../../services/product.service';

@Component({
  selector: 'app-cart-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-dialog.component.html',
  styleUrls: ['./cart-dialog.component.scss']
})
export class CartDialogComponent implements OnInit {
  products: Product[] = [];
  total: number = 0;

  constructor(
    public dialogRef: MatDialogRef<CartDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product[]
  ) {}

  ngOnInit(): void {
    this.products = this.data;
    this.calculateTotal();
  }

  calculateTotal(): void {
    this.total = this.products.reduce((acc, product) => acc + (product.price * (product.quantity || 1)), 0);
  }

  close(): void {
    this.dialogRef.close();
  }
}
