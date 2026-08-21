import {
  FormModelComponent,
  FormModelModule,
} from '@aenode/material/form-model';
import { InputModelNumberComponent } from '@aenode/material/input-model-number';
import { JsonPipe } from '@angular/common';
import { Component, viewChild } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  imports: [InputModelNumberComponent, FormModelModule, MatButton, JsonPipe],
  template: `
    <form vnForm #form (formValueChange)="handleChange($event)">
      <ae-input
        vnInput
        [required]="true"
        name="first"
        #inputField
        type="number"
        label="First"
      ></ae-input>
      <ae-input
        vnInput
        [required]="true"
        name="second"
        #inputField
        type="number"
        label="Second"
      ></ae-input>
    </form>
    <button matButton type="button" (click)="handleSubmit()">Submit</button>
    <button matButton (click)="setErrors()">Set Errors</button>
  `,
})
export class FormModelSampleComponent {
  form = viewChild<FormModelComponent>('form');

  handleChange(value: any) {
    console.log('Change: ', value);
  }

  setErrors() {
    try {
      this.form()?.errors.set({ first: ['First error'] });
    } catch {
      console.error('-------------------__ERror here-------------');
    }
  }

  handleSubmit() {
    console.log('Submittin form: ');
    this.form()?.isSubmitted.set(true);
    this.form()!
      .inputs()
      .forEach((e) => {
        console.log('passing the submitted to ', e.name());
      });
  }
}
