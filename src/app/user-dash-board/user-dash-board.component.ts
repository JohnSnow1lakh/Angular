import { Component } from '@angular/core';
import { image } from '../images';

@Component({
  selector: 'app-user-dash-board',
  templateUrl: './user-dash-board.component.html',
  styleUrls: ['./user-dash-board.component.css']
})
export class UserDashBoardComponent {
  result:string[]=[];
  images:image[]=[
    {
        src:"../../assets/images/cat1.jpg",
        label:"cat"
      },
      {
        src:"../../assets/images/cat2.jpg",
        label:"cat"
      },
      {
        src:"../../assets/images/cat3.jpg",
        label:"cat"
      },
      {
        src:"../../assets/images/cat4.jpg",
        label:"cat"
      },
      {
        src:"../../assets/images/cat5.jpg",
        label:"cat"
      },
      {
        src:"../../assets/images/dog1.jpg",
        label:"dog"
      },
      {
        src:"../../assets/images/dog2.jpg",
        label:"dog"
      },
      {
        src:"../../assets/images/dog3.jpg",
        label:"dog"
      },
      {
        src:"../../assets/images/dog4.jpg",
        label:"dog"
      },
      {
        src:"../../assets/images/horse1.jpg",
        label:"horse"
      },
      {
        src:"../../assets/images/horse2.jpg",
        label:"horse"
      },
      {
        src:"../../assets/images/horse3.jpg",
        label:"horse"
      }
    ];

    sort(label:HTMLButtonElement,resultCampus:HTMLElement){

      
          resultCampus.innerHTML=``;
      

        
        for(let i=0;i<this.images.length;i++){
          if(this.images[i].label==label.value){
            this.result.push(this.images[i].src);
          }else if(label.value=="All"){
            this.result.push(this.images[i].src);
          }
        }

        console.log(this.result[0]);

        
          resultCampus.innerHTML=``;
          for (let i = 0; i < this.result.length; i++) {
            resultCampus.innerHTML += '<img src="'+this.result[i]+'" width="400px" height="400px">';
        }
        

        this.result=[];


        
      
        
        // resultCampus.innerHTML= '<img src="../../assets/images/cat1.jpg" width="400px" height="400px">';

    }
 

  
  

}
