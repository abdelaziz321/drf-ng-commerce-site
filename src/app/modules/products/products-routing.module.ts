import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleProductComponent } from './single-product-page/single-product.component';


const routes: Routes = [
  {
    path: 'products',
    loadChildren: () => import('./products-page/products-page.module')
      .then(module => module.ProductsPageModule),
  },
  {
    path: 'products/:id',
    component: SingleProductComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class ProductsRoutingModule { }
