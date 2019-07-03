import {Component, OnInit} from '@angular/core';
import {InputBase} from './dynamic-form/input-base';
import {TextboxInput} from './dynamic-form/input-types/textbox-input';
import {DropdownInput} from './dynamic-form/input-types/dropdown-input';
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
    this.inputList = [new TextboxInput({
      value: '',
      key: 'question1',
      label: 'label1',
      validators: [{name: 'required', validator: Validators.required, message: 'this field is required'}],
      order: 1,
      type: 'email'
    }),
      new TextboxInput({
        value: '',
        key: 'question2',
        label: 'label2',
        order: 1,
        type: 'password'
      }),
      new DropdownInput({
        label: 'label2',
        value: '1',
        key: 'dropdown1',
        options: [{key: 'option1', value: '1'}, {key: 'option2', value: '2'}]
      })
    ];
  }
}
