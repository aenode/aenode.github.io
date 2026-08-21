import {
  computed,
  Directive,
  HostBinding,
  input,
  NgModule,
} from '@angular/core';

export type FlexDirectionOptions =
  | ''
  | 'column'
  | 'row'
  | 'column-reverse'
  | 'row-reverse';
export type FlexWrapOptions = '' | 'wrap' | 'nowrap' | 'wrap-reverse';

/**
 * Set display style value of the container flex
 */
@Directive({
  selector: '[aeFlex]',
  host: {
    '[style.display]': "'flex'",
    '[style.flex-direction]': 'computedVnFlex()',
  },
})
export class Flex {
  /**
   * Flex direction {@link FlexDirectionOptions}
   */
  vnFlex = input<FlexDirectionOptions>('row');

  computedVnFlex = computed(() => {
    return this.vnFlex() ? this.vnFlex() : 'row';
  });
}

/**
 * Set `display` style `flex` and `flex-direction` `row`
 */
@Directive({
  selector: '[aeFlexRow]',
  host: {
    '[style.display]': '"flex"',
    '[style.flex-direction]': '"row"',
  },
})
export class FlexRow {}

/**
 * Set `display` style `flex` and `flex-direction` `column`
 */
@Directive({
  selector: '[aeFlexCol]',
  host: {
    '[style.display]': '"flex"',
    '[style.flex-direction]': '"column"',
  },
})
export class FlexCol {}

/**
 * Set `justify-content` `space-between` and the `width` `100%`
 */
@Directive({
  selector: '[aeFlexBetween]',
  host: {
    '[style.justify-content]': '"space-between"',
    '[style.width]': '"100%"',
  },
})
export class FlexBetween {}

/**
 * Set `align-items` `center`, and `justify-content` `center`
 */
@Directive({
  selector: '[aeFlexCenter]',
  host: {
    '[style.align-items]': '"center"',
    '[style.justify-content]': '"center"',
  },
})
export class FlexCenter {}

@Directive({
  selector: '[aeFlexWrap]',
  host: {
    '[style.flex-wrap]': 'computedValue()',
  },
})
export class FlexWrap {
  value = input<FlexWrapOptions>('wrap', { alias: 'aeFlexWrap' });
  computedValue = computed<FlexWrapOptions>(() => {
    return this.value() ? this.value() : 'wrap';
  });
}

@Directive({
  selector: '[aeFlexGrow]',
  host: {
    '[style.flex-grow]': 'computedValue()',
  },
})
export class FlexGrow {
  value = input<string>('', { alias: 'aeFlexGrow' });
  computedValue = computed(() => {
    return this.value() ? this.value() : '1';
  });
}

@Directive({
  selector: '[aeFlexGap]',
  host: {
    '[style.gap]': 'computedValue()',
  },
})
export class FlexGap {
  value = input<string>('', { alias: 'aeFlexGap' });
  computedValue = computed(() => {
    return this.value() ? this.value() : '1em';
  });
}

@Directive({
  selector: '[aeFlexRowGap]',
  host: {
    '[style.row-gap]': 'computedValue()',
  },
})
export class FlexRowGap {
  value = input<string>('', { alias: 'aeFlexRowGap' });
  computedValue = computed(() => {
    return this.value() ? this.value() : '1';
  });
}
@Directive({
  selector: '[aeFlexColGap]',
  host: {
    '[style.column-gap]': 'computedValue()',
  },
})
export class FlexColGap {
  value = input<string>('', { alias: 'aeFlexColGap' });
  computedValue = computed(() => {
    return this.value() ? this.value() : '1';
  });
}

@Directive({
  selector: '[aeFlexFull]',
})
export class FlexFull {
  @HostBinding('style.width') flexFull = '100%';
}

@Directive({
  selector: '[aeFlexContainer]',
  host: {
    '[style.display]': '"flex"',
    '[style.flex-direction]': '"column"',
    '[style.width]': '"100%"',
    '[style.height]': '"100%"',
  },
})
export class FlexContainer {}

export const flexboxDirectives = [
  Flex,
  FlexGrow,
  FlexGap,
  FlexColGap,
  FlexWrap,
  FlexRowGap,
  FlexFull,
  FlexRow,
  FlexCol,
  FlexBetween,
  FlexContainer,
  FlexCenter,
];

@NgModule({
  imports: [...flexboxDirectives],
  exports: [...flexboxDirectives],
})
export class FlexModule {}
