import {Injectable} from '@angular/core';
import {AclService} from 'ng2-acl';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {AclRedirection} from './acl-redirection';

@Injectable()
export class AclDemoResolver implements Resolve<any> {

  constructor(
    private aclService: AclService,
    private router: Router,
    private aclRedirection: AclRedirection
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    if (this.aclService.can('manage_content')) {
      // has the proper permissions
      console.log('state.url :' + state.url);
      console.log('route :' + route.url);
      return of(true);
    } else {
      // doesn't have the permission
      this.aclRedirection.redirectTo('Unauthorised');
    }
  }
}
