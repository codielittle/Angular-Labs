import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string = '';
  password:string= '';
  correctUsername="user";
  correctPassword="1234";
  errorMessage = "";
  constructor(private router:Router,private form:FormsModule) {


  }

  ngOnInit() {
  }
  loginUser(event){
    if ((this.username==this.correctUsername) && (this.password==this.correctPassword)){
      this.router.navigateByUrl('/account');
    }
    else {
      //this.errorMessage = "Username or Password is incorrect";
      alert("Username or Password is incorrect");
    }
    event.preventDefault();
    console.log(this.username);
  }
}
