import {InputBase} from './input-base';
import {FormControl, FormGroup} from '@angular/forms';

export class InputsControlService {
  constructor() {
  }

  toFormGroup(inputList: InputBase<any>[]) {
    const group: any = {};
    inputList.forEach(input => {
      group[input.key] = new FormControl(input.value || '', input.validators.map(value => value.validator));
    });
    return new FormGroup(group);
  }
}
