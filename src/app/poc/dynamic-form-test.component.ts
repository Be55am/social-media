import {Component, OnInit} from '@angular/core';
import {InputBase} from './dynamic-form/input-base';
import {TextboxQuestion} from './dynamic-form/input-types/textbox-question';
import {DropdownQuestion} from './dynamic-form/input-types/dropdown-question';
import {Validators} from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-test',
  template: '<app-dynamic-form [inputList]="inputList"></app-dynamic-form>'
})
export class DynamicFormTestComponent implements OnInit {

  inputList: InputBase<string>[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.inputList = [new TextboxQuestion({
      value: '',
      key: 'question1',
      label: 'label1',
      validators: [{validator: Validators.required, message: 'this field is required'}],
      order: 1,
      type: 'email'
    }),
      new TextboxQuestion({
        value: '',
        key: 'question2',
        label: 'label2',
        order: 1,
        type: 'password'
      }),
      new DropdownQuestion({
        label: 'label2',
        value: '1',
        key: 'dropdown1',
        options: [{key: 'option1', value: '1'}, {key: 'option2', value: '2'}]
      })
    ];
  }
}
