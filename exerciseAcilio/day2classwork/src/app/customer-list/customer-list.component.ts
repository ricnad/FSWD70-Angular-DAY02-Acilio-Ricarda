import { Component, OnInit } from '@angular/core';
import {CustomerformService} from "../shared/customerform.service";


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customerArray=[];

  constructor(private CustomerformService: CustomerformService) { }

  ngOnInit() {
    this.CustomerformService.getCustomer().subscribe(
      (list) => {
        this.customerArray = list.map( (item) =>{
              return {
                $key : item.key,
                ...item.payload.val()
              }
        })
      });
  }

}
