import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @ViewChild('signup') signupForm: NgForm;

  private submitted = false;
  private answer: string;
  private genders = ['Male', 'Female'];

  private user = {
    username: '',
    email: '',
    question: '',
    answer: '',
    gender: ''
  };


  suggestUserName() {
    const suggestedUserName = 'Super User';

    this.signupForm.setValue({
      userData: {
        username: suggestedUserName,
        email: 'test@test.com'
      },
      secret: 'teacher',
      questionAnswer: '',
      gender: 'Male'
    });

    // this.signupForm.form.patchValue({
    //   gender: 'Female',
    //   secret: 'teacher'
    // });
  }

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.question = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;
    console.log(this.signupForm);
    this.signupForm.reset();

  }

}
