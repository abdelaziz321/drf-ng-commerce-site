import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category';


@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {
  categories: Category[] = [
    { id: 1, name: 'Plants' },
    { id: 2, name: 'Flowers'  },
    { id: 3, name: 'Fishes' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
