import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {InputBase} from '../../input-base';

@Component({
  selector: 'app-input-management',
  templateUrl: './simple-inputs.component.html',
  styleUrls: ['./simple-inputs.component.css']
})
export class SimpleInputsComponent implements OnInit {

  @Input() input: InputBase<any>;
  @Input() form: FormGroup;

  constructor() {
  }

  ngOnInit() {
  }


}
