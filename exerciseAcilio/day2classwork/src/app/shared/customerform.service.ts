import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { AngularFireDatabase, AngularFireList} from "angularfire2/database" 

@Injectable({
  providedIn: 'root'
})
export class CustomerformService {

  constructor(private firebase: AngularFireDatabase) { }
  customerList: AngularFireList<any>;

  form = new FormGroup({
    $key: new FormControl(null),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    mobile: new FormControl('', [Validators.required, Validators.minLength(8)]),
    location: new FormControl('')
  });

  getCustomer(){
    this.customerList = this.firebase.list('customers');
    return this.customerList.snapshotChanges();
  }

  insertCustomer(costumer) {
    this.customerList.push({
      firstName: costumer.firstName,
      lastName: costumer.lastName,
      gender: costumer.gender,
      email: costumer.email,
      mobile: costumer.mobile,
      location: costumer.location  

    });
  }
}
