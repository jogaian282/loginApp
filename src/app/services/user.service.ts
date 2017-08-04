import { Injectable } from '@angular/core';

@Injectable()

export class UserService {

    private isUserLogged;
    public username;

    constructor() {
        this.isUserLogged = false;
    }

    setUserLoggedIn(){
        this.isUserLogged = true;
        this.username = "admin";
    }

    getUserLoggedIn(){
        if(this.isUserLogged){
            return this.isUserLogged;
        }
        else{
            this.isUserLogged = false;
            return this.isUserLogged;
        }
    }

}