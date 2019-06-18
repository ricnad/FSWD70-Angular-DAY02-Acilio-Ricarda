import { Component, OnInit } from '@angular/core';
import { RegistrationService} from "../shared/registration.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private registrationService: RegistrationService) { }
  submitted: boolean;
  formControls= this.registrationService.form.controls;
  
  ngOnInit() {
  }

  onSubmit(){
  	this.submitted = true;
  	if(this.registrationService.form.valid){
  	if(this.registrationService.form.get("$key").value == null){
  		this.registrationService.insertRegistration(this.registrationService.form.value);
      this.showSuccessMessage = true;
      setTimeout(()=> this.showSuccessMessage=false, 3000);
      this.submitted = false;
      this.registrationService.form.reset();
  	} else {

  	}
  }
}
}
