import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsPageComponent } from './components/products-page/products-page.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';


@NgModule({
  declarations: [
    ProductsPageComponent,
    ProductsListComponent,
    SingleProductComponent,
    CategoriesListComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
