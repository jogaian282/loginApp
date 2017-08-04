import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selectDropdown',
  templateUrl: './selectDropdown.component.html',
  styleUrls: ['./selectDropdown.component.css']
})
export class SelectDropdownComponent implements OnInit {

  private selectedValue = [];
  private selectedRoles:any;

  private roles = [
    { value: 'admin', display: 'Administrator' },
    { value: 'guest', display: 'Guest' },
    { value: 'custom', display: 'Custom' }
  ];



  constructor() { }

  ngOnInit() {
  }

  // selectedRole(e){
  //   this.selectedValue = e.target.value;
  // }

  rolesList(role){
    // this.selectedRoles = this.selectedValue.push(role.value);
    let noOfRoles = [];
    for (var index = 0; index < role.length; index++) {
     noOfRoles.push(role);
    }
    this.selectedRoles = noOfRoles;
    console.log(this.selectedRoles);
  }
}
