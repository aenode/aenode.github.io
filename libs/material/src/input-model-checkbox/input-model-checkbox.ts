import { InputModelDirective } from '@aenode/material/form-model';
import { Component } from '@angular/core';
import {
  MatCheckboxChange,
  MatCheckboxModule,
} from '@angular/material/checkbox';

@Component({
  selector: 'ae-input[type="checkbox"][value]',
  imports: [MatCheckboxModule],
  template: `
    @let __value = value();
    @let __label = label();
    @let __required = required();

    <mat-checkbox
      [checked]="__value"
      [ariaChecked]="__value"
      [ariaChecked]="__value"
      (change)="handleChange($event)"
      [required]="__required"
    >
      {{ __label }}
    </mat-checkbox>
  `,
})
export class InputModelCheckboxComponent extends InputModelDirective<
  boolean,
  'checkbox'
> {
  handleChange(checkboxChange: MatCheckboxChange) {
    this.value.set(checkboxChange.checked);
    this.isTouched.set(true);
    this.isDirty.set(true);
  }
}
