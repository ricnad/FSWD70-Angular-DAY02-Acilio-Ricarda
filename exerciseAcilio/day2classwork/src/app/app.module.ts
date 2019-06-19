import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {AngularFireModule} from "angularfire2";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {environment} from "../environments/environment";
import {CustomerComponent} from './customer/customer.component';
import {CustomerListComponent} from './customer-list/customer-list.component';

import {ReactiveFormsModule} from "@angular/forms";
import {CustomerformService} from "./shared/customerform.service";
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerListComponent,
    HomeComponent,
    NavbarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    //call initializeApp to provide connection details
    AngularFireModule.initializeApp(environment.firebaseConfig),
    //here we import the class
    AngularFireDatabaseModule

  ],
  providers: [CustomerformService],
  bootstrap: [AppComponent]

})
export class AppModule { }
