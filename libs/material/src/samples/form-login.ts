import { FlexModule } from '@aenode/material/flex';
import { FormModule } from '@aenode/material/form';
import { InputTextComponent } from '@aenode/material/input-text';
import { InputValidator } from '@aenode/material/validators';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'ae-form[login]',
  imports: [
    FormModule,
    MatButtonModule,
    ReactiveFormsModule,
    InputTextComponent,
    FlexModule,
  ],
  template: `
    <form
      vnForm
      vnFlexCol
      vnFlexGap
      [formGroup]="formGroup"
      submitLabel="Login"
      resetLabel="Reset"
    >
      <ae-input
        type="text"
        [required]="true"
        formControlName="username"
        label="Username"
      ></ae-input>
      <ae-input
        type="text"
        [required]="true"
        [password]="true"
        formControlName="password"
        label="Password"
      ></ae-input>
      <button
        type="button"
        mat-flat-button
        vnFormAction
        (click)="forgotPassword()"
      >
        Forgot Password
      </button>
    </form>
  `,
  standalone: true,
})
export class FormLogin {
  inputValidator = inject(InputValidator);
  formGroup = new FormGroup({
    username: new FormControl('', [
      InputValidator.required(),
      InputValidator.email(),
    ]),
    password: new FormControl('', [
      InputValidator.required(),
      InputValidator.password(),
    ]),
  });

  forgotPassword() {
    console.log('Forgot password button clicked');
  }
}
