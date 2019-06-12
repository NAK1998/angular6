import { Component } from '@angular/core';
import {ImageService} from '../services/image.service'
//import { AgmCoreModule } from '@agm/core';
import {Router} from '@angular/router';

@Component({
  selector: 'user',
  templateUrl: './app.user.html',
  styleUrls: ['./app.user.css']
})
export class UserComponent {
  title:string;
  user:string;
  urrl:urll[];
  ab:string;
  showImage:boolean;
  mapShow:boolean;
  showMusic: boolean;
  showSport: boolean;
  showArt: boolean;
  showAll:boolean;

  constructor(private imageService: ImageService,private router:Router)
  {
    this.user = localStorage.key(0);
    console.log("Current user is " +this.user);
    var a: string = localStorage.getItem(this.user);
    this.title = a;
    this.showImage = false;
    this.showArt = false;
    this.showMusic = false;
    this.showSport = false;
    this.showAll = true;
   
  }
  ngOnInit() {
    this.imageService.getImage().subscribe(response => {
      this.urrl= response;
      this.showImage = true;
      var i:number = 0;
      for (i;i<this.urrl.length;i++){
        this.urrl[i].show = false;
        
        this.urrl[i].date = this.urrl[i].date.slice(0,-18);
        
      }
      
      
      
      /*console.log(this.urrl[0].url);
      console.log(this.urrl[0].lati);
      console.log(this.urrl[0].longi);
      console.log(this.urrl[0].no);
      */


    });

  }
  showMap(no:number){
    if (!this.urrl[no].show)
          this.urrl[no].show = true;
    else
          this.urrl[no].show = false;
  }
  addToHistory(n:number,date:any, d:string, lati:number,longi:number, typee:string, url:string){
    this.imageService.postImage(n,date,d,lati,longi,typee,url);
  }
  checkHistory(){
    this.router.navigateByUrl("/history");

  }
  check(a:string){
    if (a =="all"){
      this.showArt = false;
      this.showMusic = false;
      this.showSport = false;
      this.showAll = true;

    }
    else if (a == "music"){
      this.showArt = false;
    this.showMusic = true;
    this.showSport = false;
    this.showAll = false;
    }
    else if (a=="art"){
      this.showArt = true;
    this.showMusic = false;
    this.showSport = false;
    this.showAll = false;
    }
    else if (a =="sport"){
      this.showArt = false;
    this.showMusic = false;
    this.showSport = true;
    this.showAll = false;
    }
  }
  back(){
    this.router.navigateByUrl("/login");
  }
}
interface urll{
   url:string;
   description:string;
   longi: number;
   lati: number;
   show:boolean;
   no:number;
   type:string;
   date:string;
}