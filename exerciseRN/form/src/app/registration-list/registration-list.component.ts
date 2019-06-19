import { Component, OnInit } from '@angular/core';
import { RegistrationService } from "../shared/registration.service";

@Component({
  selector: 'app-registration-list',
  templateUrl: './registration-list.component.html',
  styleUrls: ['./registration-list.component.css']
})
export class RegistrationListComponent implements OnInit {
  registrationArray=[];
  showDeletemessage: boolean;
  searchText: string="";

  constructor(public registrationService: RegistrationService) { }

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
  onDelete($key){
    if(confirm("Are you sure you want to delete this record?")){this.registrationService.deleteRegistration($key);
      this.showDeletemessage=true;
      setTimeout(()=> this.showDeletemessage=false,3000)
    }
  }
  filterCondition(registration){
    return registration.firstName.toLowerCase().indexOf(this.searchText.toLowerCase())!=-1;
  }

}
