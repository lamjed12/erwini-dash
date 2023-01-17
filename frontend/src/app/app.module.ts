import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './admin/shared/navbar/navbar.component';
import { SidebarComponent } from './admin/shared/sidebar/sidebar.component';
import { DashbordComponent } from './admin/pages/dashbord/dashbord.component';
import { CertificationsComponent } from './admin/pages/certifications/certifications.component';
import { TrainingComponent } from './admin/pages/training/training.component';
import { ApplyComponent } from './admin/pages/apply/apply.component';
import { WhiteTestComponent } from './admin/pages/white-test/white-test.component';
import { ProfilComponent } from './admin/shared/profil/profil.component';
import { LoginComponent } from './admin/pages/login/login.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule }   from '@angular/forms';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    DashbordComponent,
    CertificationsComponent,
    TrainingComponent,
    ApplyComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
