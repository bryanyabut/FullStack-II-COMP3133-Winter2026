import { Component, inject } from '@angular/core';
import { HTTPService } from '../shared/httpservice';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {

  //create an instance of HTTPService class
  private readonly httpService = inject(HTTPService)

  products : any[] = [];

  selectedCategory : string = ""
  searchTerm : string = ""

  //extract unique categories from product list
  get productCategories() : string[]{
    return [...new Set(this.products.map(p => p.category))]
  }

  filteredProducts(){
    let result = [...this.products]

    if (this.selectedCategory){
      result = result.filter(p => p.category === this.selectedCategory)
    }

    if (this.searchTerm.trim()){
      result = result.filter(p => p.title.toLowerCase().includes(this.searchTerm.toLowerCase()))
    }

    return result
  }

  //will be called when the PostList component is created/mounted
  ngOnInit(){
    this.getProducts();
  }

  onSubmitClicked(){
    console.log(`Filters applied`);
    
  }

  onClearClicked(){
    console.log(`Filters reset`);
    this.selectedCategory = ""
    this.searchTerm = ""
  }

  getProducts(){
    this.httpService.getProducts().subscribe( { 
      next : (response) => {
        //extracts the products prperty from the response
        this.products = response.products
        console.log(`${this.products.length} products received from API.`);
      },
      error : (error) =>{
        console.log(`Error while receiving data from API ${error}`);
      }
    })
  }

  createProduct(newProduct : any){
    this.httpService.createProduct(newProduct).subscribe( { 
      next : (response) => {
        console.log(response);
      },
      error : (error) =>{
        console.log(`Error while adding product to API ${error}`);
      }
    })
  }

}
