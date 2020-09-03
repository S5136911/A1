import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  username:string = '';
  email:string = '';
  birthdate:string = '';
  age:string = '';
  valid:string = '';
  constructor(private router: Router) { }

  ngOnInit() {

    if (sessionStorage.length == 0){
      this.router.navigateByUrl('/login');
    } else {
      this.username = JSON.parse(sessionStorage.getItem('user')).username;
      this.email = JSON.parse(sessionStorage.getItem('user')).email;
      this.birthdate = JSON.parse(sessionStorage.getItem('user')).birthdate;
      this.age = JSON.parse(sessionStorage.getItem('user')).age;
      this.valid = JSON.parse(sessionStorage.getItem('user')).valid;
    }
  }

  save(){
    const user ={
      username: this.username,
      birthdate: this.birthdate,
      email: this.email,
      age: this.age,
      valid: this.valid
    }

    sessionStorage.setItem('user', JSON.stringify(user));
    this.router.navigateByUrl('/account/'+ encodeURIComponent(JSON.stringify(user)));
  }

}
