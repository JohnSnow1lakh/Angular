import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgForm,FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginDetailsComponent } from './login-details/login-details.component';
import { UserDashBoardComponent } from './user-dash-board/user-dash-board.component';
import {RouterModule} from  '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginDetailsComponent,
    RegistrationComponent,
    AdminDashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'login-page', component: LoginDetailsComponent},
      {path: 'user-dashboard', component: UserDashBoardComponent},
      {path:'admin-dashboard',component:AdminDashboardComponent},
      {path: 'register-page', component: RegistrationComponent},
      {path: '', redirectTo: '/login-page', pathMatch: 'full'},
    ])
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
