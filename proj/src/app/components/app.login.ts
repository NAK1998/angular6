import { Component } from '@angular/core';
import {PostService} from '../services/posts.service'


import {Router,ActivatedRoute} from '@angular/router';





@Component({
  selector: 'login',
  
  templateUrl: './app.loginpage.html',
  styleUrls: ['./app.loginpagec.css'],
 
  providers: [PostService]
})
export class LoginComponent {
  title = 'app';
  registered: boolean;
  users : user;
  
  verified: boolean;
  returnUrl: string;
  emptyName:boolean;
  emptyPassword:boolean;
  equalPassword:boolean;
  newRegister:boolean;
  newRegisters:string;
 
  

  constructor(private postService: PostService,private router:Router){
    this.verified = true;
    this.registered = true;
      localStorage.clear();
      this.emptyName = false;
      this.emptyPassword = false;
      this.equalPassword = true;
      this.newRegister = false;



  }
  ngOnInit() {
    //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/user';
    this.newRegisters = localStorage.key(0);
  
      
  }
  checkRegistered(){
    if (this.registered==false)
      this.registered = true;
    else if(this.registered==true)
      this.registered = false;

      
  }
  validate (username:number , password:string){
  
    localStorage.clear();
    var a: boolean;
     this.postService.getUsers(username).subscribe(response =>
      {
          this.users = response;
         // console.log(this.users);
          if (this.users.password==password){
          this.verified = true;
              
         var a:number = localStorage.length;
              
         localStorage.setItem(username.toString(),this.users.name);
         
              

          
          
         // this.router.navigateByUrl(this.returnUrl);
         this.router.navigateByUrl('/user');
          }
          else{
              this.verified = false;
              console.log("Incorrect!!");
          }
      },
      error => {
        this.verified = false;
              console.log("Incorrect!!");

      }
    );


         

    

  



}
validateFields(n1:string,p1:string,p2:string){
  this.equalPassword = false;
  console.log(this.equalPassword);
  if (n1==""){
      this.emptyName = true;
  }
  else
      this.emptyName = false;
  if (p1==""){
      this.emptyPassword = true;
  }
  else{
    this.emptyPassword = false;
    if (p1===p2)
      this.equalPassword = true;
    else
      this.equalPassword = false;
  }
  if (this.equalPassword == true){
    console.log("Ended validation!!!");
    //this.post(n1,p1);
  }
  if (!this.emptyName && !this.emptyPassword && this.equalPassword)
  {
    this.post(n1,p1);
  }
}
post(name:string,password:string){

  this.postService.postUser(name,password).subscribe(response =>{
    console.log(response);
    this.newRegister = true;
    this.newRegisters = response.toString();
    
  });
  
   
   
   
   
  
  

}

}
interface user{
    id: number;
    name: string;
    password: string;
    
}
