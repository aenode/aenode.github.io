import { BaseInput } from '@aenode/material/input';
import { Component, input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector:
    'ae-input[type="slide"], ae-input[type="slider"], ae-input[type="slide-toggle"]',
  standalone: true,
  imports: [ReactiveFormsModule, MatSlideToggleModule],
  template: `
    @let __control = formControl();

    @if (__control) {
      <mat-slide-toggle
        [formControl]="__control"
        [disabled]="disabled()"
        [ariaLabel]="label()"
        [required]="required()"
      >
        {{ label() }}
      </mat-slide-toggle>
    }
  `,
})
export class SlideToggleComponent extends BaseInput {
  type = input.required<'slider' | 'slide' | 'slide-toggle'>();
}
