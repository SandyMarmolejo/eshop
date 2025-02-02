// src/app/components/components.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ProductListComponent,
    ProductDetailComponent
  ]
})
export class ComponentsModule { }

