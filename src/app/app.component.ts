import {Component, OnInit} from '@angular/core';
import {AclService} from 'ng2-acl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-dream-app';
  aclData = {};

  constructor(private aclService: AclService) {
  }

  ngOnInit() {

    // this code is for the acl demo -----------------------------------------
    // setting the data you should get from the backend
    this.aclData = {
      guest: ['login'],
      member: ['login', 'view_content'],
      admin: ['logout', 'view_content', 'manage_content'],
    };
    this.aclService.setAbilities(this.aclData);
    // attach the member role the current user
    this.aclService.attachRole('admin');
    // ------------------------------------------------------------------------

  }


}
