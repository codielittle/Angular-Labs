import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
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
  userObject: any;
  public url = 'http://localhost:3000';

  constructor(private router:Router,private form:FormsModule, private http:HttpClient) {


  }

  ngOnInit() {
  }
  loginUser(event){
    this.http.post('login', {username: this.username, password: this.password,}).subscribe(
        res=>{
            console.log("test");
            console.log(res);
        }
    )




    
    if ((this.username==this.correctUsername) && (this.password==this.correctPassword)){
      this.userObject = {
        username: this.username,
        birthDate: '28/12/96',
        age: "21"
      };
      localStorage.setItem("user", JSON.stringify(this.userObject));
      //console.log(this.userObject);
      this.router.navigateByUrl('/account');
    }
    else {
      //this.errorMessage = "Username or Password is incorrect";
      alert("Username or Password is incorrect");
    }
    event.preventDefault();
//    console.log(this.username);
  }
}
