import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routing } from '../app.routes';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
   email:any;
   password:any;
  constructor(private router: Router) { }
  signupUser(){
    if(this.email != null && this.password != null){
      this.router.navigate(['feed']);
    }

  }

  ngOnInit() {
  }

}
