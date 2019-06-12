import { Injectable } from '@angular/core';

import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { PostService } from './services/posts.service';

@Injectable()
export class AuthGuard implements CanActivate {
   
    

    constructor(private router: Router, private postService: PostService) {
        
     }
     

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        //console.log(this.postService.isLoggedin);

        if (localStorage.length>0){
            //console.log("reached here!!");

            
                 return true;

        }

        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});

        return false;

    }
    

}