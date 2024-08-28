import { Component ,OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {CartService} from '../cart.service'
import { Product } from '../../models/product';
import {MatCardModule} from '@angular/material/card'
import {MatListModule} from '@angular/material/list'
import {MatButtonModule} from '@angular/material/button'



@Component({
  selector: 'app-cart-view',
  standalone: true,
  imports: [CommonModule,MatCardModule,MatListModule,MatButtonModule],
  templateUrl: './cart-view.component.html',
  styleUrl: './cart-view.component.css'
})
export class CartViewComponent implements OnInit {
   
  products : Product[]=[];
  totalPrice:number=0;

  constructor(private cartService:CartService)
  {

  }

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe(products =>{
      this.products = products;
      this.totalPrice = this.getTotalPrice();
    })
  }

  getTotalPrice():number
  {
    let totalprice:number=0;
    for(let item of this.products)
    {
      totalprice= totalprice + item.price;
    }
    return totalprice
  }

  clearCart():void{
    this.cartService.clearCart().subscribe();
  }

  checkout(){
    this.cartService.checkout(this.products).subscribe();
  }

}
