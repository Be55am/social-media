import {InputBase} from '../input-base';
import {Validators} from '@angular/forms';

export class TextboxQuestion extends InputBase<string> {
  controlType = 'textbox';
  type: string;
  placeHolder: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
    this.placeHolder = options['placeHolder'] || '';
    switch (this.type) {
      case 'email': {
        this.validators.push({name: 'email', validator: Validators.email, message: 'insert a correct email!'});
        break;
      }
      case 'password': {
        this.validators.push({name: 'required', validator: Validators.required, message: 'this field is required!'});
        break;
      }
    }
  }
}
