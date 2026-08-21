import { InputModelDirective } from '@aenode/material/form-model';
import { Component } from '@angular/core';

@Component({
  selector: 'ae-input[type="text"]',
  template: `<p>input-model-text</p>`,
})
export class InputModelTextComponent extends InputModelDirective<
  string,
  'text'
> {}
