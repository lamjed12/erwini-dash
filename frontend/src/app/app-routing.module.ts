import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './user/shared/navbar/navbar.component';
import { SidebarComponent } from './user/shared/sidebar/sidebar.component';
import { DashbordComponent } from './user/pages/dashbord/dashbord.component';
import { vannesComponent } from './user/pages/vannes/vannes.component';
import { WhiteTestComponent } from './user/pages/white-test/white-test.component';
import { ProfilComponent } from './user/shared/profil/profil.component';
import { LoginComponent } from './user/pages/login/login.component';

import { HomeComponent } from './home/home.component'
import { moteursComponent } from './user/pages/moteurs/moteurs.component';
const routes: Routes = [
  { path: 'home', component:  HomeComponent},
  { path: 'navbarComponent', component: NavbarComponent },
  { path: 'sidebarComponent', component: SidebarComponent },
  { path: 'dashbord', component: DashbordComponent },
  { path: 'moteur',component: moteursComponent },
 
  { path: 'vanne', component: vannesComponent },
  { path: 'white_test', component: WhiteTestComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
