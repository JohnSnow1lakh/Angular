import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {

  constructor(private http:HttpClient,private router: Router){

  }
  file:any;
  name="image";

  getFile(event:any){
    this.file=event.target.files[0];
    console.log('file',this.file);
  }

  submit(){
    let formData=new FormData;
    formData.set("name",this.name);
    formData.set("file",this.file);
    this.http.post('http://localhost:3001/upload/uploadFiles',formData).subscribe(
      (res)=>{

      }
    )
  }
  
}
