
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { Routes, RouterModule } from '@angular/router';
import { CoreskillsComponent } from './coreskills/coreskills.component';
import { HobbiesComponent } from './hobbies/hobbies.component';

const routes: Routes = [
  { path: '', component: AboutmeComponent },
]


@NgModule({
  declarations: [
    AppComponent,
    AboutmeComponent,
    CoreskillsComponent,
    HobbiesComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
