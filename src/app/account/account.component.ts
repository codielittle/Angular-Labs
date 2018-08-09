import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  userObject = {
    username: ' ',
    birthdate: ' ',
    age: ' '

  };
  temp;
  temp2;
  //userObject.age = 12;
  constructor() {

  }

  ngOnInit() {
    this.temp = localStorage.getItem("user");
    this.temp2 = JSON.parse(this.temp);
    this.userObject = this.temp2;
    //console.log(JSON.parse(this.userObject));
  }

}
