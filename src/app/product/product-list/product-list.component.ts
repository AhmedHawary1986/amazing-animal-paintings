import { Component, OnInit } from '@angular/core';



import { ProductService} from '../product.service';
import { Product} from '../../models/product'
import { CommonModule } from '@angular/common';
import { MatCardModule} from '@angular/material/card'
import { FlexModule } from '@angular/flex-layout'
import { MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar'
import {CartService} from '../../cart/cart.service'
import {MatInputModule} from '@angular/material/input'
import {MatSelectModule} from '@angular/material/select'

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule,MatCardModule,FlexModule,MatSnackBarModule,MatInputModule,MatSelectModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  products : Product[]=[];
  filterdProducts : Product[]=[];
  sortOrder : string="";
  constructor(private productService:ProductService,private cartService:CartService, private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products =>{
     this.products= products;
     this.filterdProducts = products;
    });

    

}

addToCart(product:Product){
  this.cartService.addProduct(product).subscribe({
    next:() =>{
       this.snackBar.open("Product added to Cart!","",{
        duration:2000,
        verticalPosition:"top",
        horizontalPosition:"right"
       })
    }
  });
}

applyFilter(event:Event){
  let searchTerm = (event.target as HTMLInputElement).value;
  searchTerm = searchTerm.toLocaleLowerCase();
  this.filterdProducts = this.products.filter(product=> product.name.toLocaleLowerCase().includes(searchTerm));
  this.sortProduct(this.sortOrder);
}

sortProduct(sortValue:string)
{
   this.sortOrder = sortValue;
   if(this.sortOrder == 'PriceLowHigh')
   {
      this.filterdProducts.sort((a,b)=> a.price - b.price);
   }
   else if(this.sortOrder == 'PriceHighLow')
    {
       this.filterdProducts.sort((a,b)=> b.price - a.price);
    }
}

}
