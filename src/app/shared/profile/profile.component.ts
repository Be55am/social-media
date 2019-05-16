import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user';
import {ProfileService} from './profile.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {

  user: User;

  constructor(private profileService: ProfileService, private activeRoute: ActivatedRoute) {
  }

  ngOnInit() {
    if (this.activeRoute.snapshot.url[0].path === 'home') {
      this.user = this.profileService.getLoggedUser();
    } else {
      this.user = this.profileService.getUser(this.activeRoute.snapshot.params['username']);
      console.log(this.activeRoute.snapshot.url[0].path);
    }
  }

}
