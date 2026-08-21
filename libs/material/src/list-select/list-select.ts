import { FieldsetComponent } from '@aenode/material/fieldset';
import { BaseInput } from '@aenode/material/input';
import { Component, input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'ae-input[type="list"], ae-input[type="list-select"],',
  imports: [FieldsetComponent, ReactiveFormsModule, MatListModule],
  template: `
    @let __label = label();
    @let __control = formControl();
    @let __multiple = multiple();
    @let __minitems = minitems();
    @let __maxitems = maxitems();
    @let __required = required();
    @let __options = options();

    <ae-fieldset [label]="__label">
      @if (__options !== undefined) {
        <mat-selection-list
          #componentRef
          [formControl]="__control"
          [multiple]="__multiple"
          [minlength]="__minitems"
          [maxlength]="__maxitems"
          [required]="__required"
          [ariaLabel]="__label"
        >
          @for (option of __options; track option) {
            <mat-list-option [value]="option.value">
              {{ option.label }}
            </mat-list-option>
          }
        </mat-selection-list>
      }
    </ae-fieldset>
  `,
})
export class ListSelectComponent<
  T extends string | number,
> extends BaseInput<T> {
  type = input.required<'list' | 'list-select'>();

  protected override transformValue(value: T) {
    return [value];
  }
}
