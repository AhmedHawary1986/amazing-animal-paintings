import { Injectable } from '@angular/core';
import {environment} from '../environments/environment'
import {HttpClient} from '@angular/common/http'
import{Observable} from 'rxjs'
import {Product} from '../models/product'
@Injectable({
  providedIn: 'root'
})
export class CartService {

  private apiCartURL = environment.apiURL+"/cart"
  private apiCheckoutURL = environment.apiURL+"/checkout"
  constructor(private http:HttpClient) { }

   addProduct(product:Product):Observable<Product>
   {
      return this.http.post<Product>(this.apiCartURL,product);
   }

   getCartItems():Observable<Product[]>
   {
    return this.http.get<Product[]>(this.apiCartURL);
   }

   clearCart() : Observable<void>
   {
     return this.http.delete<void>(this.apiCartURL);
   }

   checkout(products:Product[]):Observable<void>
   {
      return this.http.post<void>(this.apiCheckoutURL,products);
   }
}
