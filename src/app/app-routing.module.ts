import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MahasiswaComponent } from './mahasiswa/mahasiswa.component';
import { OtentikasiGuard } from './otentikasi.guard';

const routes: Routes = [
  {path: "", redirectTo: "login", pathMatch: "full"},
  {path: "admin", component: AdminComponent },
  {path: "dashboard", component: DashboardComponent, canActivate : [OtentikasiGuard]},
  {path: "dashboard2", component: Dashboard2Component, canActivate : [OtentikasiGuard]},
  {path: "login", component: LoginComponent},
  {path: "signup", component: SignupComponent},
  {path: "mahasiswa", component: MahasiswaComponent, canActivate : [OtentikasiGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
