import {Component, OnInit} from '@angular/core';
import {ProfileService} from '../shared/profile/profile.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;

  constructor(private loginService: ProfileService, private router: Router) {
  }

  ngOnInit() {
  }

  public onDoingSomething(event) {
   // this.email = data;
    console.log(event.target.value);
  }

  login(content) {
    this.loginService.login(content);
    this.router.navigate(['/home']);
  }

}
