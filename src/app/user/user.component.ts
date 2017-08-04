import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  name;

  constructor(private _activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    console.log(this._activatedRoute);
    this.name = this._activatedRoute.snapshot.params.name;
  }

}
