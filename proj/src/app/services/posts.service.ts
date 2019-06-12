import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {RequestOptions, Request, RequestMethod} from '@angular/http';
//import {LoginComponent} from '../components/app.login'
import { Observable } from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { headersToString } from 'selenium-webdriver/http';

@Injectable()
export class PostService{
    a:string;
    

    constructor(private http: Http, private https: HttpClient){
        
        console.log('intialized');
    }
    getUsers(id:number){
        var url:string;
        url = "http://localhost:8080/users/" ;
        
        const urlWithId = url + id;
       // console.log(urlWithId);
       // this.isLoggedin = true;
        
          return this.http.get(urlWithId).map(res => res.json());
          
      
            
        
    }
    postUser(name:string,password:string){
       var a:string;
      
var body = "{\"name\":" + "\"" + name + "\"" + ",\n\"password\":" +  "\"" + password + "\""+ "}";
    let headers = new HttpHeaders();
headers = headers.append('Content-Type', 'application/json');
return this.https.post("http://localhost:8080/users/", body,{headers: headers});
//.subscribe((reponse) => { console.log(reponse)
     //   var abc:string = reponse.toString();
     //   localStorage.clear();
      //  localStorage.setItem(abc, "X");
     //   console.log("inside posting user" +abc);
     //   a = abc;
//});


        
    }


    }


