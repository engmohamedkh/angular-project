import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AllPageCardComponent } from './component/all-page-card/all-page-card.component';
import { ErrorComponent } from './component/error/error.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { AddProductComponent } from './component/add-product/add-product.component';
import { DeleteProductComponent } from './component/delete-product/delete-product.component';
import { ProductsComponent } from './component/products/products.component';

export const routes: Routes = [
    {path:"",redirectTo: "/home", pathMatch: "full"},
    {path:"home", component:HomeComponent},
    {path:"card", component:AllPageCardComponent},
    {path:"addproduct", component:AddProductComponent},
    {path:"deleteproduct", component:DeleteProductComponent},
    {path:"product", component:ProductsComponent},
    {path:"**", component:ErrorComponent}
];
