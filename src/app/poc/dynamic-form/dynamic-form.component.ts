import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {InputsControlService} from './inputs-control.service';
import {InputBase} from './input-base';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
  providers: [InputsControlService]
})
export class DynamicFormComponent implements OnInit {

  @Input() inputList: InputBase<any>[];
  form: FormGroup;
  payLoad = '';

  constructor(private questionControlService: InputsControlService) {
  }

  ngOnInit() {
    console.log(this.inputList);
    this.form = this.questionControlService.toFormGroup(this.inputList);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
    console.log(this.inputList);
    console.log(this.form.controls);
  }

  onReset() {
    this.form.reset();
  }

  // ngOnInit() {
  //   this.checkboxes = new FormGroup({
  //     'checkbox1': new FormControl(false),
  //     'checkbox2': new FormControl(false),
  //     'checkbox3': new FormControl(false),
  //
  //   });
  // }
  //
  // onChangeSelectedBoxesToList() {
  //   const list = Object.entries(this.checkboxes.value);
  //   const list2 = list.map(entry => {
  //     if (entry[1] === true) {
  //       return entry[0];
  //     } else {
  //       return null;
  //     }
  //   }).filter(entry => {
  //     if (entry !== null) {
  //       return entry[0];
  //     }
  //   });
  //   console.log(list2);
  // }

}
