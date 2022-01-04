import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';


const routes: Routes = [
  {
    path: 'cart',
    component: CartPageComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: ':type',
    component: MyOrdersComponent
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
