import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngIFDemo',
  templateUrl: './ngIFDemo.component.html',
  styleUrls: ['./ngIFDemo.component.css']
})
export class NgIFDemoComponent implements OnInit {

  isToggle:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggle(){
    this.isToggle = !this.isToggle;
  }

  favouriteLangs = {
    "frontEnd" : [
      "HTML5",
      "CSS3",
      "JS",
      "REST API"
    ],
    "backEnd" : [
      "PHP",
      "Python",
      "Ruby",
      "Perl"
    ]
  }

}
