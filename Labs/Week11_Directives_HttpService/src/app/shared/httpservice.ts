import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HTTPService {

  //create instance of HttpClient module and inject it to the application
  private readonly httpClient = inject(HttpClient)

  private API_BASE_URL = "https://dummyjson.com/products"

  public getProducts() : Observable<any>{
    return this.httpClient.get(this.API_BASE_URL)
  }

  public getProductById(id: number) : Observable<any>{
    return this.httpClient.get(`${this.API_BASE_URL}/${id}`)
  }

  public createProduct(newProduct: any) : Observable<any>{
    return this.httpClient.post(`${this.API_BASE_URL}/add`, newProduct)
  }

  public updateProduct(id : number, updateProduct : any) : Observable<any>{
    return this.httpClient.put(`${this.API_BASE_URL}/${id}`, updateProduct)
  }

  public deleteProduct(id: number) : Observable<any>{
    return this.httpClient.delete(`${this.API_BASE_URL}/${id}`)
  }

}
