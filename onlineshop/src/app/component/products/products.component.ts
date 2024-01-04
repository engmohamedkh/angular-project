import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductsService } from '../../serves/productServes/products.service';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IProduct } from '../../Helpers/Iproduct';
import { FormsModule } from '@angular/forms';
import { ProductsService as prod } from '../../Services/products.service';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [HttpClientModule, RouterModule,FormsModule],
 providers: [ProductsService],
  templateUrl: './products.component.html',
  styles: ``
})
export class ProductsComponent implements OnInit, OnChanges {
 prdListOfCat: IProduct[] = [];

 products: any[] | undefined;
 // prdListOfCat: any;
  sentCatID: number = 0;
  searchTerm: string = '';

    constructor(private myService: ProductsService, private router: Router,private productsService: prod) {

  }
  get isSearch(){
    return this.searchTerm != '' ? true : false ;
  }

  get filteredProducts(): IProduct[] {
    return this.prdListOfCat.filter((product:IProduct) =>
      product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );}

 /*serach(){
    return this.prdListOfCat.filter((product:IProduct) =>{
      product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    })
  }*/
  getelemByCat(){
    console.log(this.sentCatID)
    this.myService.getProductsByCategoryid(this.sentCatID)
    .subscribe(
      {
        next:(products:any)=>{
          
          this.prdListOfCat = products;
        },
        error:()=>{console.log("7asal Error")}
      })
    }

  ngOnChanges(): void {
    // this.filterProductsByCatID();
    // this.prdListOfCat=this.staticPrdService.getProductsByCatID(this.sentCatID);
    this.getelemByCat();
    }
  
  

  ngOnInit(): void {
    this.myService.getAllProducts()
      .subscribe({
        next:(products)=>{
          
          this.prdListOfCat = products;
        },
        error:()=>{console.log("7asal Error")}
      })
      this.productsService.getProducts().subscribe((data) => {
        this.products = data;
        console.log(this.products)
      });
     
  }
}



