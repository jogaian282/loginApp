import { Component,ViewChild,OnInit,ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Angular 4';
  // @ViewChild('name') name : ElementRef;
  
  constructor(private _router:Router){

  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // console.log(this.name);
    // this.name.nativeElement.focus();
  }

  dropdown(){
    this._router.navigate(['/dropdown'],{skipLocationChange:true});
  }

}
