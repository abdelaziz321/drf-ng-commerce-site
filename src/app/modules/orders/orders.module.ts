import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { CheckoutComponent } from './components/checkout/checkout.component';


@NgModule({
  declarations: [
    CartPageComponent,
    MyOrdersComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
