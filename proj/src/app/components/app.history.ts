import { Component } from '@angular/core';
import {ImageService} from '../services/image.service'
import { AgmCoreModule } from '@agm/core';
import {Router} from '@angular/router';

@Component({
  selector: 'user',
  templateUrl: './app.history.html',
 styleUrls: ['./app.history.css']
})
export class HistoryComponent {

    id:string;
    urrl:urll[];
  
  constructor(private imageService: ImageService,private router:Router)
  {
      this.id = localStorage.key(0);
      
      this.imageService.getHistory().subscribe(response => {
        this.urrl = response;
        var i: number = 0;
          for (i;i<this.urrl.length;i++){
            this.urrl[i].show = false;
            
            this.urrl[i].date = this.urrl[i].date.slice(0,-18);
          }
        

    });

   
  }
  showMap(no:number){
    
    
    var i: number = 0;
          for (i;i<this.urrl.length;i++){
            if (this.urrl[i].no==no){
              if (!this.urrl[i].show){
                  this.urrl[i].show=true;
              }
              else
              this.urrl[i].show = false;
            }
          }

   
  
}}
 export interface urll{
  url:string;
  number:number;
  description:string;
  longi: number;
  lati: number;
  show:boolean;
  no:number;
  type:string;
  date:string;
}