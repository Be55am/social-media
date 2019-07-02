import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-form-reactive-approach',
  templateUrl: './form-reactive-approach.component.html',
  styleUrls: ['./form-reactive-approach.component.css']
})
export class FormReactiveApproachComponent implements OnInit {

  private genders = ['Male', 'Female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['Chris', 'Anna'];
  elements = ['element1', 'element2', 'element3'];

  constructor() {
  }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'username': new FormControl(null, [Validators.minLength(3), Validators.required, this.forbiddenNames.bind(this)]),
      'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
      'gender': new FormControl('Male'),
      'checkbox': new FormControl(null),
    });
  }

  // Synchronos validator
  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }
    return null;
  }

  buildCheckBox() {
    const arr = this.elements.map((element) => {
      return new FormControl(null);
    });
    return new FormControl(arr);
  }

  // Async validator
  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });

    return promise;
  }

  onSubmite() {
    console.log(this.signupForm.get('username'));
  }

}
