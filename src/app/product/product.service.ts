import { Injectable } from '@angular/core';
import { environment } from '../environments/environment'
import { Product} from '../models/product'
import {HttpClient} from '@angular/common/http'
import { Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url :string = environment.apiURL+"/products"
  constructor(private httpClient : HttpClient) { }

  getProducts():Observable<Product[]>
  {
    return this.httpClient.get<Product[]>(this.url);
  }
}
