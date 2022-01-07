import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ShopBannerComponent } from './components/shop-banner/shop-banner.component';
import { RouterModule } from '@angular/router';
import { ProductsPageComponent } from './products-page.component';


@NgModule({
  declarations: [
    ProductsPageComponent,

    ShopBannerComponent,
    ProductsListComponent,
    CategoriesListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ProductsPageComponent }])
  ],
  exports: [
    ShopBannerComponent,
    ProductsListComponent,
    CategoriesListComponent
  ]
})
export class ProductsPageModule { }

