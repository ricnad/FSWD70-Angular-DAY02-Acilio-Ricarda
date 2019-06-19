import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"; 


@Injectable({
  providedIn: 'root'
})

export class RegistrationService {

  constructor(public firebase: AngularFireDatabase) {  }
    registrationList: AngularFireList<any>;

  	form = new FormGroup({
  		$key: new FormControl(null),
  		firstName: new FormControl('', Validators.required), 
  		lastName: new FormControl('', Validators.required), 
  		telephone: new FormControl('',[Validators.required, Validators.minLength(8)]),
  		email: new FormControl('',Validators.email), 
  		address: new FormControl('', Validators.required),
      gender: new FormControl('')
  	});

    getRegistration(){
      this.registrationList = this.firebase.list('registration');
      return this.registrationList.snapshotChanges();
    };

    insertRegistration (registration){
      this.registrationList.push({
        firstName: registration.firstName,
        lastName: registration.lastName,
        telephone: registration.telephone,
        email: registration.email,
        address: registration.address,
        gender: registration.gender
      });
   }
   populateForm(registration){
     this.form.setValue(registration);
   }
   updateRegistration(registration){
     this.registrationList.update(registration.$key,{
       firstName: registration.firstName,
       lastName: registration.lastName,
       telephone: registration.telephone,
       email: registration.email,
       address: registration.address,
       gender: registration.gender
     });
   }
    deleteRegistration($key:string){
    this.registrationList.remove($key);
  }
      
}
