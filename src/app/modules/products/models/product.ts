import { Category } from "./category";

export interface Product {
  id : number,
  name : string,
  image : string,
  price : string,
  review : number,
  total_sales : number,
  category : Category,

  is_in_cart? : boolean,
}