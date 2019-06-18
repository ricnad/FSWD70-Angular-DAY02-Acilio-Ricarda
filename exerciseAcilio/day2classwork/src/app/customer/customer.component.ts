import { Component, OnInit } from '@angular/core';
import {CustomerformService} from "../shared/customerform.service";


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  allnames=["Male","Female"];

  constructor(private customerformService: CustomerformService) { }
  submitted: boolean;
  formControls = this.customerformService.form.controls;
  showSuccessMessage: boolean;

 ngOnInit() {
 }

 onSubmit(){
   this.submitted = true;
   if(this.customerformService.form.valid){
           if(this.customerformService.form.get("$key").value == null ){                    
             this.customerformService.insertCustomer(this.customerformService.form.value);
       this.showSuccessMessage =true;// we set the property to true
       setTimeout(()=> this.showSuccessMessage=false,3000); // we used setTimeout here so after 3 second the showSuccessMessage value will be false
       this.submitted = false;
       this.customerformService.form.reset();// the form will be empty after new record created
         } else {
                 //update
         }
   }
 }
}

