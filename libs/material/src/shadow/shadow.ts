import { ShadowLevel, shadowVar } from '@aenode/material/common';
import { computed, Directive, input } from '@angular/core';

@Directive({
  selector: '[aeShadow]',
  host: {
    '[style.box-shadow]': 'vnvnShadowComputed()',
  },
})
export class ShadowDirective {
  vnShadow = input.required<ShadowLevel>();
  protected vnvnShadowComputed = computed(() => shadowVar(this.vnShadow()));
}
