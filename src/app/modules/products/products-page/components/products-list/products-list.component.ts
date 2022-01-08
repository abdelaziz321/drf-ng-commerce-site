import { Component, OnInit } from '@angular/core';
import { Product } from '@app/modules/products/models/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products : Product[] = []

  constructor() { }

  ngOnInit(): void {
    this.addFakeProducts();
  }

  addFakeProducts() {
    for (let i = 0; i < 11; i++) {
      this.products.push({
        id: i,
        name: 'guppy albino full red',
        image: 'assets/clownfish.jpg',
        price: '15$',
        review: Math.floor(Math.random() * 6),
        total_sales: 32,
        category: { id: 1, name: 'fish' },
        is_in_cart: Math.random() > 0.8 
      });
    }
  }

}
