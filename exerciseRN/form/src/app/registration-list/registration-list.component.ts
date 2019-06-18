import { Component, OnInit } from '@angular/core';
import { RegistrationService } from "../shared/registration.service";

@Component({
  selector: 'app-registration-list',
  templateUrl: './registration-list.component.html',
  styleUrls: ['./registration-list.component.css']
})
export class RegistrationListComponent implements OnInit {

  constructor(private registrationService: RegistrationService) { }

  ngOnInit() {
  	this.registrationService.getRegistration().subscribe(
  		(list) => {
  			this.registrationArray = list.map ((item) => {
  				return {
  					$key : item.key,
  					...item.payload.val()
  				}
  			})
  		});
  }

}
