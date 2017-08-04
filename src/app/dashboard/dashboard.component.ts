import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  name:string = "anonymous";

  constructor(private _userService:UserService) { }

  ngOnInit() {
    this.name = this._userService.username;
  }

}
