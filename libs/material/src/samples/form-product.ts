import { ButtonToggleComponent } from '@aenode/material/button-toggle';
import { CheckboxComponent } from '@aenode/material/checkbox';
import { FlexModule } from '@aenode/material/flex';
import { FormModule } from '@aenode/material/form';
import { InputNumberComponent } from '@aenode/material/input-number';
import { InputTextComponent } from '@aenode/material/input-text';
import { ListSelectComponent } from '@aenode/material/list-select';
import { RadioComponent } from '@aenode/material/radio';
import { SlideToggleComponent } from '@aenode/material/slide-toggle';
import { InputValidator } from '@aenode/material/validators';
import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputOption } from '../input/input';
import { SelectComponent } from '../select/select';

@Component({
  selector: 'ae-form[product]',
  imports: [
    FormModule,
    ReactiveFormsModule,
    InputTextComponent,
    ListSelectComponent,
    InputNumberComponent,
    CheckboxComponent,
    SelectComponent,
    RadioComponent,
    SlideToggleComponent,
    ButtonToggleComponent,
    FlexModule,
    JsonPipe,
  ],
  template: `
    {{ formGroup.value | json }}
    <form
      vnForm
      vnFlexCol
      vnFlexGap
      [formGroup]="formGroup"
      (formSubmitEvet)="handleFormSubmit($event)"
    >
      <ae-input
        formControlName="name"
        type="text"
        [required]="true"
        label="Name"
      ></ae-input>
      <ae-input
        formControlName="description"
        type="text"
        [required]="true"
        label="Description"
      ></ae-input>
      <ae-input
        formControlName="upc"
        type="text"
        [required]="true"
        label="Unique Product Code"
      ></ae-input>
      <ae-input
        formControlName="serialNumber"
        type="text"
        [required]="true"
        label="Serial Number"
      ></ae-input>
      <ae-input
        formControlName="price"
        type="number"
        [decimals]="2"
        [required]="true"
        label="Price"
      ></ae-input>
      <ae-input
        formControlName="cost"
        type="number"
        [decimals]="2"
        [required]="true"
        label="Cost"
      ></ae-input>
      <ae-input
        formControlName="quantity"
        type="integer"
        [min]="0"
        [required]="true"
        label="Quantity"
      ></ae-input>
      <ae-input
        formControlName="category"
        type="select"
        [options]="categories"
        [defaultValue]="categories[0].value"
        [required]="true"
        label="Category"
      ></ae-input>
      <ae-input
        formControlName="supplier"
        type="list"
        [defaultValue]="suppliers[0].value"
        [options]="suppliers"
        [required]="true"
        label="Supplier"
      ></ae-input>
      <ae-input
        formControlName="size"
        type="button-toggle"
        [defaultValue]="sizes[0].value"
        [options]="sizes"
        [required]="true"
        label="Size"
      ></ae-input>
      <ae-input
        formControlName="store"
        type="radio"
        [options]="stores"
        [defaultValue]="stores[0].value"
        label="Store"
      ></ae-input>
      <ae-input
        formControlName="active"
        type="slider"
        label="Active"
      ></ae-input>
      <ae-input
        formControlName="onSale"
        type="checkbox"
        label="On Sale"
      ></ae-input>
    </form>
  `,
})
export class FormProduct {
  inputValidator = inject(InputValidator);
  formGroup = new FormGroup({
    name: new FormControl(null, []),
    description: new FormControl(null, [InputValidator.required]),
    upc: new FormControl(null, [InputValidator.required]),
    serialNumber: new FormControl(null, [InputValidator.required]),
    category: new FormControl(null, [InputValidator.required]),
    price: new FormControl(null, [InputValidator.required]),
    cost: new FormControl(null, [InputValidator.required]),
    quantity: new FormControl(null, [InputValidator.required]),
    supplier: new FormControl(null, [InputValidator.required]),
    size: new FormControl(null, [InputValidator.required]),
    store: new FormControl(null, [InputValidator.required]),
    active: new FormControl(null, [InputValidator.required]),
    onSale: new FormControl(null, [InputValidator.required]),
  });

  suppliers: InputOption<number>[] = [
    { value: 1, label: 'Supplier 1' },
    { value: 2, label: 'Supplier 2' },
    { value: 3, label: 'Supplier 3' },
    { value: 4, label: 'Supplier 4' },
    { value: 5, label: 'Supplier 5' },
  ];

  sizes: InputOption<string>[] = [
    { value: 'XS', label: 'XS' },
    { value: 'S', label: 'S' },
    { value: 'M', label: 'M' },
    { value: 'L', label: 'L' },
    { value: 'XL', label: 'XL' },
  ];

  categories: InputOption<number>[] = [
    { value: 1, label: 'Category 1' },
    { value: 2, label: 'Category 2' },
    { value: 3, label: 'Category 3' },
    { value: 4, label: 'Category 4' },
  ];

  stores: InputOption<number>[] = [
    { value: 1, label: 'Store 1' },
    { value: 2, label: 'Store 2' },
    { value: 3, label: 'Store 3' },
    { value: 4, label: 'Store 4' },
  ];

  handleFormSubmit(value: any) {
    console.log('Addredd form submit: ', value);
  }
}
