import { BaseInput } from '@aenode/material/input';
import { NumberFilterDirective } from '@aenode/material/number-filter';
import { Component, input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'ae-input[type="number"], ae-input[type="integer"]',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    NumberFilterDirective,
  ],
  template: `
    @let control = formControl();

    @if (control) {
      <mat-form-field>
        <!-- Description -->
        @if (label()) {
          <mat-label>{{ label() }}</mat-label>
        }
        @if (hint()) {
          <mat-hint>{{ hint() }}</mat-hint>
        }

        <!-- Prefix/Suffix -->
        @if (textPrefix()) {
          <span matTextPrefix>{{ textPrefix() }}</span>
        }
        @if (textSuffix()) {
          <span matTextSuffix>{{ textSuffix() }}</span>
        }
        @if (iconPrefix()) {
          <mat-icon matIconPrefix>{{ iconPrefix() }}</mat-icon>
        }
        @if (iconSuffix()) {
          <mat-icon matIconSuffix>{{ iconSuffix() }}</mat-icon>
        }

        <!-- Errors -->
        <mat-error>{{ errorMessage() }}</mat-error>

        <!-- Input -->
        <input
          matInput
          type="text"
          autocomplete="off"
          [formControl]="formControl()"
          [placeholder]="placeholder()"
          [disabled]="disabled()"
          [min]="min()"
          [max]="max()"
          [maxlength]="maxlength()"
          [required]="required()"
          aeNumberFilter
          [aeNumberType]="type()"
          [aeDecimals]="decimals()"
        />
      </mat-form-field>
    }
  `,
})
export class InputNumberComponent extends BaseInput<number> {
  type = input.required<'number' | 'integer'>();
  decimals = input<number>(6);
}
