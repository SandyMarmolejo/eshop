import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService, Product } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

interface GroupedProducts {
  category: string;
  products: Product[];
}

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  groupedProducts: GroupedProducts[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const products = this.productService.getProducts();
    this.groupProductsByCategory(products);
  }

  groupProductsByCategory(products: Product[]): void {
    const grouped: { [category: string]: Product[] } = {};
    products.forEach(product => {
      if (!grouped[product.category]) {
        grouped[product.category] = [];
      }
      grouped[product.category].push(product);
    });

    this.groupedProducts = Object.keys(grouped).map(category => ({
      category,
      products: grouped[category]
    }));
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  goToProductDetail(product: Product) {
    this.router.navigate(['/products', product.id]); // Navegar al detalle del producto
  }
}
