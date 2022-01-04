import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsPageComponent } from './components/products-page/products-page.component';
import { SingleProductComponent } from './components/single-product/single-product.component';


const routes: Routes = [
  {
    path: '',
    component: ProductsPageComponent
  },
  {
    path: ':id',
    component: SingleProductComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
