import {InputBase} from './input-base';
import {FormControl, FormGroup} from '@angular/forms';

export class InputsControlService {
  constructor() {
  }

  toFormGroup(questions: InputBase<any>[]) {
    const group: any = {};
    questions.forEach(question => {
      group[question.key] = new FormControl(question.value || '', question.validators.map(value => value.validator));
    });
    return new FormGroup(group);
  }
}
