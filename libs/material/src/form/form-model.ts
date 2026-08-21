import { Component, model, signal } from '@angular/core';

@Component({
  selector: 'ae-form, [aeForm]',
  exportAs: 'aeForm',
  template: `
    <form aeFlexCol aeFlexGap>
      <ng-content></ng-content>
    </form>
  `,
})
export class FormModelComponent {
  // readonly inputs = contentChildren(FormFieldComponent, { descendants: true })
  readonly validationErrors = model<Record<string, string[]>>();
  readonly value = model<any>();
  readonly isSubmitted = signal<boolean>(false);
}
