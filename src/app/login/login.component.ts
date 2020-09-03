import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})


export class LoginComponent implements OnInit {

  
  email: string = 'Email Address';
  password: string = 'password';
  error: boolean = false;
  hidemessage: boolean = true;
  uri:string = 'http://localhost:3000';
  

  constructor(private router: Router, private form: FormsModule, private http:HttpClient) { }
 
  ngOnInit() {
  }

  btnClick(){
    const obj = {
      email: this.email,
      upwd : this.password
    }
    this.http.post(`${this.uri}/api/login`, obj).subscribe
   (data => {
       
              console.log(data);
              sessionStorage.setItem('user', JSON.stringify(data));
              this.router.navigateByUrl('/account/' + encodeURIComponent(JSON.stringify(data)));
            });


   }
 }
  
