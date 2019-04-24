import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;

  constructor() {
  }

  ngOnInit() {
  }

  public onDoingSomething(event) {
   // this.email = data;
    console.log(event.target.value);
  }

}
