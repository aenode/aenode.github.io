import { Color, colorVar } from '@aenode/material/common';
import { computed, Directive, input } from '@angular/core';

/**
 * Directive to set elements's style color from the angular-theme variables
 */
@Directive({
  selector: `[aeColor]`,
  host: {
    '[style.color]': 'aeColorComputed()',
  },
})
export class ColorDirective {
  /**
   * Text color variable {@link Color}
   */
  aeColor = input.required<Color>();

  protected aeColorComputed = computed(() => colorVar(this.aeColor()));
}

/**
 * Directive to set elements's style color from the angular-theme variables
 */
@Directive({
  selector: `[aeBgColor]`,
  host: {
    '[style.backgroundColor]': 'aeBgColorComputed()',
  },
})
export class BgColorDirective {
  /**
   * Background color variable {@link Color}
   */
  aeBgColor = input.required<Color>();

  protected aeBgColorComputed = computed(() => colorVar(this.aeBgColor()));
}
