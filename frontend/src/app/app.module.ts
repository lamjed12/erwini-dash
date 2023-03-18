import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import {ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './user/shared/navbar/navbar.component';
import { SidebarComponent } from './user/shared/sidebar/sidebar.component';
import { DashbordComponent } from './user/pages/dashbord/dashbord.component';


import { WhiteTestComponent } from './user/pages/white-test/white-test.component';
import { ProfilComponent } from './user/shared/profil/profil.component';
import { LoginComponent } from './user/pages/login/login.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule }   from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { moteursComponent } from './user/pages/moteurs/moteurs.component';
import { vannesComponent } from './user/pages/vannes/vannes.component';


import { MatSlideToggleModule } from '@angular/material/slide-toggle';


// import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    DashbordComponent,
    moteursComponent,
    vannesComponent,
    WhiteTestComponent,
    ProfilComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    FormsModule,
    // AgmCoreModule.forRoot({
    //   // please get your own API key here:
    //   // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
    //   apiKey: 'AIzaSyAvcDy5ZYc2ujCS6TTtI3RYX5QmuoV8Ffw'
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
