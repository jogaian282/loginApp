import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { User } from './user';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'loginApp',
  templateUrl: './loginApp.component.html',
  styleUrls: ['./loginApp.component.css']
})

export class LoginAppComponent implements OnInit {

  private user:User;
  private formOnSubmit: boolean = false;

  @ViewChild('loginApp') login;
  @ViewChild('userName') userName : ElementRef;

  constructor(private _router:Router,private _userService:UserService) { }

  ngOnInit() {
    this.userName.nativeElement.focus();
    this.user={
      username : '',
      password: ''
    }
  }

  onSubmit(app){
    if(this.login.valid){
      this.formOnSubmit = false;
      this.user = app.value;
      console.log(this.user);
      var username = this.user.username;
      var password = this.user.password;
      if(username == "admin" && password == "admin"){
        this._userService.setUserLoggedIn();
        this._router.navigate(['/dashboard']);
      }
      else{
        alert("Login Failed");
        this.login.reset();
        return;
      }
    }
    else{
      alert(" '****' - Fill Mandatory Fields");
      this.formOnSubmit = true;
      return;
    }
  }

}
