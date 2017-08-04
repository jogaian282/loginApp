import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from './services/user.service';

@Injectable()

export class AuthguardGuard implements CanActivate {

  constructor(private _userService:UserService,private _router:Router){

  }

  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot):boolean {
    if(this._userService.getUserLoggedIn()){
      return true;
    }
    else{
      alert("You are not authenticated");
      this._router.navigate(['/']);
      return;
    }
  }

}
