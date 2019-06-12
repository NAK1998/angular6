import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {HttpClient, HttpHeaders} from '@angular/common/http'
//import {LoginComponent} from '../components/app.login'

@Injectable()
export class ImageService{
    

    constructor(private http: Http,private https: HttpClient){
        
        console.log('intialized');
    }
    getImage(){
        var url:string;
        url = "http://localhost:8080/events" ;
        
       // console.log(urlWithId);
       // this.isLoggedin = true;
        
          return this.http.get(url).map(res => res.json());
      
            
        
    }
    postImage(n:number,date:any,d:string,lati:number, longi:number,typee:string,url:string){

        var ide: string = localStorage.key(0);
        var id:number = +ide;
        //console.log(id);
        var body = "{\"no\":" + "\"" + n + "\"" + ",\n\"date\":" +  "\"" + date + "\""+  ",\n\"description\":" +  "\"" + d + "\""+  ",\n\"id\":" +  "\"" + id + "\"" + ",\n\"lati\":" +  "\"" + lati + "\"" 
                + ",\n\"longi\":" +  "\"" + longi + "\"" +  ",\n\"type\":" +  "\"" + typee + "\""
                    +",\n\"url\":" +  "\"" + url + "\"" + "}";
                console.log(body);

                let headers = new HttpHeaders();
                headers = headers.append('Content-Type', 'application/json');
        
                 var urle:string = "http://localhost:8080/events";
        
       
        
                this.https.post(urle, body,{headers: headers}).subscribe((reponse) => { console.log(reponse)});
      
            
        
    }
    getHistory(){
        var ide:string = localStorage.key(0);
        var id:number = +ide;
        const url = "http://localhost:8080/events/history/" + id;
        return this.http.get(url).map(res => res.json());

    }

}