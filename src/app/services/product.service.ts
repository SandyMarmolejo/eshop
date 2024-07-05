import { Injectable } from '@angular/core';


export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  quantity?: number;
  description?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Leche', price: 1.5, image: '../../assets/leche.jpeg', category: 'Lacteos', description: 'Leche fresca de granja.' },
    { id: 2, name: 'Queso', price: 1.0, image: '../../assets/queso.jpeg', category: 'Lacteos', description: 'Queso fresco pasteurizado.' },
    { id: 3, name: 'Jamonada', price: 2.5, image: '../../assets/jamon.jpeg', category: 'Embutidos', description: 'Jamonada de pollo premium.' }
  ];

  getProducts() {
    return this.products;
  }

  getProductById(id: number) {
    return this.products.find(product => product.id === id);
  }
}

