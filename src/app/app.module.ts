
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { CoreskillsComponent } from './coreskills/coreskills.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactsComponent } from './contacts/contacts.component';





@NgModule({
  declarations: [
    AppComponent,
    AboutmeComponent,
    CoreskillsComponent,
    HobbiesComponent,
    ProjectsComponent,
    ContactsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
