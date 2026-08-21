import { AutocompleteComponent } from '@aenode/material/autocomplete';
import { ButtonToggleComponent } from '@aenode/material/button-toggle';
import { CheckboxComponent } from '@aenode/material/checkbox';
import { BaseInput } from '@aenode/material/input';
import { InputDateComponent } from '@aenode/material/input-date';
import { InputNumberComponent } from '@aenode/material/input-number';
import { InputTextComponent } from '@aenode/material/input-text';
import { InputTimeComponent } from '@aenode/material/input-time';
import { ListSelectComponent } from '@aenode/material/list-select';
import { RadioComponent } from '@aenode/material/radio';
import { SelectComponent } from '@aenode/material/select';
import { SlideToggleComponent } from '@aenode/material/slide-toggle';
import { Component, input } from '@angular/core';

export type InputType =
  | 'text'
  | 'number'
  | 'integer'
  | 'date'
  | 'time'
  | 'autocomplete'
  | 'list'
  | 'select'
  | 'slide'
  | 'button-toggle'
  | 'radio'
  | 'checkbox';

@Component({
  selector: 'ae-input-field, [vnInputField]',
  imports: [
    InputDateComponent,
    InputTimeComponent,

    InputTextComponent,
    AutocompleteComponent,
    InputNumberComponent,

    ListSelectComponent,
    SlideToggleComponent,
    ButtonToggleComponent,
    RadioComponent,
    CheckboxComponent,
    SelectComponent,
  ],
  template: `
    @let t = type();

    @if (t === 'text') {
      <ae-input [label]="label()" type="text"></ae-input>
    } @else if (t === 'select') {
      <ae-input
        [label]="label()"
        type="select"
        [options]="options()"
      ></ae-input>
    } @else if (t === 'autocomplete') {
      <ae-input
        [label]="label()"
        type="autocomplete"
        [options]="options()"
      ></ae-input>
    } @else if (t === 'radio') {
      <ae-input [label]="label()" type="radio" [options]="options()"></ae-input>
    } @else if (t === 'list') {
      <ae-input [label]="label()" type="list" [options]="options()"></ae-input>
    } @else if (t === 'button-toggle') {
      <ae-input
        [label]="label()"
        type="button-toggle"
        [options]="options()"
      ></ae-input>
    } @else if (t === 'number') {
      <ae-input [label]="label()" type="number"></ae-input>
    } @else if (t === 'integer') {
      <ae-input [label]="label()" type="integer"></ae-input>
    } @else if (t === 'checkbox') {
      <ae-input [label]="label()" type="checkbox"></ae-input>
    } @else if (t === 'date') {
      <ae-input [label]="label()" type="date"></ae-input>
    } @else if (t === 'time') {
      <ae-input [label]="label()" type="time"></ae-input>
    } @else if (t === 'slide') {
      <ae-input [label]="label()" type="slide"></ae-input>
    }
  `,
  styles: `
    ae-input {
      width: 100%;
    }
  `,
})
export class InputFieldComponent extends BaseInput {
  type = input.required<InputType>();
}
