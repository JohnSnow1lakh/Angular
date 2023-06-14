import { Component,OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent  {

  users:any[]=[];

  onSubmit(name:any,email:any,pass:any) {
    this.users.push({'username':name.value,'email':email.value,'password':pass.value});
    console.log(this.users);
  }
  



}
