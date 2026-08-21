import { Directive, input } from '@angular/core';

/**
 * Add `.fill` class to the icon component
 */
@Directive({
  selector: '[aeIconFill]',
  host: {
    '[class.fill]': 'aeIconFill()',
  },
})
export class IconFillDirective {
  aeIconFill = input(false);
}
