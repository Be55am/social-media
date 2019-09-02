import {AsyncValidatorFn, ValidatorFn} from '@angular/forms';

/**
 * The imput base is the model of the imputs that should be extanded
 * @param the parameter Options is the configuration input
 * ------------------
 *  value : is the output type.
 *  key : is the name of the formcontroll
 *  validators: a list of validators
 */
export abstract class InputBase<T> {
  value: T;
  key: string;
  label: string;
  /**
   * the name of the validator is related to the name given by angular for example email for the email and required for the
   * required validator etc
   */
  validators: { name: string, validator: ValidatorFn, message: string }[] = [];
  asyncValidator: { name: string, validator: AsyncValidatorFn, message: string }[] = [];

  order: number;
  controlType: string;

  constructor(options: {
    value?: T,
    key?: string,
    label?: string,
    validators?: { name: string, validator: ValidatorFn, message: string }[],
    asyncValidator?: { name: string, validator: AsyncValidatorFn, message: string }[],
    order?: number,
    controlType?: string
  } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.validators = options.validators || [];
    this.asyncValidator = options.asyncValidator || [];
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
  }
}
