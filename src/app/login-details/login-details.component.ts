import { Component } from '@angular/core';
import { NgForm,FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-details',
  templateUrl: './login-details.component.html',
  styleUrls: ['./login-details.component.css']
})
export class LoginDetailsComponent {
  authenticated=false;



  constructor(private router: Router) { }

  onSubmit(username:any,pass:any){  
    this.authenticated=true;
    console.log(username.value+"   "+pass.value);  
  }

}
