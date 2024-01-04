import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IProduct } from '../../Helpers/Iproduct';
import { ProductsService } from '../../serves/productServes/products.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports:[HttpClientModule, RouterModule,FormsModule],
  providers:[ProductsService],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  newPrd: IProduct= {} as IProduct
  constructor(private productService : ProductsService){}
 AddProduct(ev:IProduct){
    console.log(ev)
    this.productService.addNewProduct(this.newPrd).subscribe({

      next:(response) => {
        console.log('Item deleted successfully:', response);
       
      },
      error:(error) => {
        console.error('Error deleting item:', error);
        
      },
      complete:()=>{
        alert("Added Successfully")
      }
    }
    );
}
}
