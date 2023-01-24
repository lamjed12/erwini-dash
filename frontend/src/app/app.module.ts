import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './admin/shared/navbar/navbar.component';
import { SidebarComponent } from './admin/shared/sidebar/sidebar.component';
import { DashbordComponent } from './admin/pages/dashbord/dashbord.component';

import { TrainingComponent } from './admin/pages/training/training.component';

import { WhiteTestComponent } from './admin/pages/white-test/white-test.component';
import { ProfilComponent } from './admin/shared/profil/profil.component';
import { LoginComponent } from './admin/pages/login/login.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule }   from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { agriculteursComponent } from './admin/pages/agriculteurs/agriculteurs.component';







//import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    DashbordComponent,
    agriculteursComponent,
    TrainingComponent,
    //ApplyComponent,
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
