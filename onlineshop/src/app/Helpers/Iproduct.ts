export interface IProduct {
    id:number;
    name:string;
    category_id:number;
    brand:string;
    price:number;
   // quantity:number;
    imgURL?:string;
    specs: {
        display: string,
        camera: string,
        storage:string
      }
  }
  /*"id": 101,
  "name": "iPhone 13",
  "category_id": 1,
  "brand": "Apple",
  "price": 1099.99,
  "specs": {
    "display": "6.1 inches",
    "camera": "Dual 12 MP",
    "storage": "128 GB"
  }*/