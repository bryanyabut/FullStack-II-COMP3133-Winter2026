import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-order-form',
  imports: [ReactiveFormsModule],
  templateUrl: './order-form.html',
  styleUrl: './order-form.css',
})
export class OrderForm {
  purchaseForm : any

  protected readonly ticketTypes = [
    {value: 'Adult', label: "Adult (18-64)"}, 
    {value: 'Youth', label: "Youth (13+)"}, 
    {value: 'Child', label: "Child (1-12)"}, 
    {value: 'Seniors', label: "Seniors (65+)"}, 
  ]

  constructor( private formBuilder : FormBuilder ){}

  ngOnInit() : void{
    this.purchaseForm = this.formBuilder.group({
      name : ['', [Validators.required, Validators.minLength(3)] ],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      ticketType: ['', [Validators.required]],
      numTickets: ['', [Validators.required, Validators.min(1), Validators.max(10)]]
    })
  }

  submitForm() : void {

    if(this.purchaseForm?.valid){
      alert(`Form data : ${JSON.stringify(this.purchaseForm.value)}`)
    }else{

      this.purchaseForm.markAllAsTouched()

      alert(`Please enter all the required inputs.`)
    }
  }

}
