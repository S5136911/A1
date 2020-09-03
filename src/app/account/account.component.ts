import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})

export class AccountComponent implements OnInit {
  obj_string:string = '';
  username:string = '';
  email:string = '';
  birthdate:string = '';
  age:string = '';
  valid:string = '';

  ppp;
  constructor(private route:ActivatedRoute, private router: Router ) { }

  ngOnInit() 
  {
    this.ppp = this.route.paramMap.subscribe(params=>{
      this.obj_string = params.get('user');
      this.username = JSON.parse(this.obj_string).username;
      this.birthdate = JSON.parse(this.obj_string).birthdate;
      this.email = JSON.parse(this.obj_string).email;
      this.age = JSON.parse(this.obj_string).age;
      this.valid = JSON.parse(this.obj_string).valid;
      
    });
  }

  edit() {
    this.router.navigateByUrl('/profile');
  }
  add() {
    this.router.navigateByUrl('/add');
  }
}
