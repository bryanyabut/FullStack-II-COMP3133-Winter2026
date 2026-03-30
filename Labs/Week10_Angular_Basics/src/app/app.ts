import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//CommonModule to support directives and pipes
import { CommonModule } from '@angular/common';

//import any childe components
import { Product } from './product/product';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Product],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Week10_Angular_Basics');

  protected studentID = "1234567890";
  protected myName = "John Doe";

  greetButtonClicked() : void {
    alert(`Hello from ${this.myName}`)
  }

  protected readonly imageURL = "https://cdn.pixabay.com/photo/2022/01/29/10/09/magnolia-697683_640.png";

  protected today : Date = new Date();
  protected amount = 1234567.90;
  

}
