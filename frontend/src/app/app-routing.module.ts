import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './admin/shared/navbar/navbar.component';
import { SidebarComponent } from './admin/shared/sidebar/sidebar.component';
import { DashbordComponent } from './admin/pages/dashbord/dashbord.component';
import { CertificationsComponent } from './admin/pages/certifications/certifications.component';
import { TrainingComponent } from './admin/pages/training/training.component';
import { ApplyComponent } from './admin/pages/apply/apply.component';
import { WhiteTestComponent } from './admin/pages/white-test/white-test.component';
import { ProfilComponent } from './admin/shared/profil/profil.component';
import { LoginComponent } from './admin/pages/login/login.component';

import { HomeComponent } from './home/home.component'
const routes: Routes = [
  { path: 'home', component:  HomeComponent},
  { path: 'navbarComponent', component: NavbarComponent },
  { path: 'sidebarComponent', component: SidebarComponent },
  { path: 'dashbord', component: DashbordComponent },
  { path: 'certification', component: CertificationsComponent },
  { path: 'training', component: TrainingComponent },
  { path: 'apply', component: ApplyComponent },
  { path: 'white_test', component: WhiteTestComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
