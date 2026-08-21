import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import {
  Component,
  computed,
  Directive,
  inject,
  input,
  isDevMode,
  NgModule,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDrawerMode, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

// Toolbar
// ToolbarLeft
// ToolbarRight
// Statusbar
// StatusbarLeft
// StatusbarRight
// Sidenav
// SidenavTop
// SidenavBottom
// Content
// ContentTop
// ContentBottom
// FloatTop
// FloatTopRight
// FloatTopLeft
// FloatTopCenter
// FloatBottom
// FloatBottomRight
// FloatBottomLeft
// FloatCenterCenter
// FloatLeftCenter
// FloatRightCenter

@Directive({ selector: '[aeToolbar]' })
export class ToolbarDirective {}
@Directive({ selector: '[aeToolbarLeft]' })
export class ToolbarLeftDirective {}
@Directive({ selector: '[aeToolbarRight]' })
export class ToolbarRightDirective {}
@Directive({ selector: '[aeStatusbar]' })
export class StatusbarDirective {}
@Directive({ selector: '[aeStatusbarLeft]' })
export class StatusbarLeftDirective {}
@Directive({ selector: '[aeStatusbarRight]' })
export class StatusbarRightDirective {}
@Directive({ selector: '[aeSidenav]' })
export class SidenavDirective {}
@Directive({ selector: '[aeSidenavTop]' })
export class SidenavTopDirective {}
@Directive({ selector: '[aeSidenavBottom]' })
export class SidenavBottomDirective {}
@Directive({ selector: '[aeContent]' })
export class ContentDirective {}
@Directive({ selector: '[aeContentTop]' })
export class ContentTopDirective {}
@Directive({ selector: '[aeContentBottom]' })
export class ContentBottomDirective {}
@Directive({ selector: '[aeFloatTop]' })
export class FloatTopDirective {}
@Directive({ selector: '[aeFloatTopRight]' })
export class FloatTopRightDirective {}
@Directive({ selector: '[aeFloatTopLeft]' })
export class FloatTopLeftDirective {}
@Directive({ selector: '[aeFloatTopCenter]' })
export class FloatTopCenterDirective {}
@Directive({ selector: '[aeFloatBottom]' })
export class FloatBottomDirective {}
@Directive({ selector: '[aeFloatBottomRight]' })
export class FloatBottomRightDirective {}
@Directive({ selector: '[aeFloatBottomLeft]' })
export class FloatBottomLeftDirective {}
@Directive({ selector: '[aeFloatCenterCenter]' })
export class FloatCenterCenterDirective {}
@Directive({ selector: '[aeFloatLeftCenter]' })
export class FloatLeftCenterDirective {}
@Directive({ selector: '[aeFloatRightCenter]' })
export class FloatRightCenterDirective {}

@Directive({
  selector: '[aeViewPort]',
  exportAs: 'aeViewPort',
})
export class ViewPortDirective {
  private readonly observer = inject(BreakpointObserver);
  private readonly state = toSignal<BreakpointState>(
    this.observer.observe(Object.values(Breakpoints)),
    { initialValue: null },
  );

  private isMatched(breakpoint: string) {
    return computed(() => {
      this.state();
      return this.observer.isMatched(breakpoint);
    });
  }

  readonly isHandset = this.isMatched(Breakpoints.Handset);
  readonly isHandsetLandscape = this.isMatched(Breakpoints.HandsetLandscape);
  readonly isHandsetPortrait = this.isMatched(Breakpoints.HandsetPortrait);
  readonly isLarge = this.isMatched(Breakpoints.Large);
  readonly isMedium = this.isMatched(Breakpoints.Medium);
  readonly isSmall = this.isMatched(Breakpoints.Small);
  readonly isTablet = this.isMatched(Breakpoints.Tablet);
  readonly isTabletLandscape = this.isMatched(Breakpoints.TabletLandscape);
  readonly isTabletPortrait = this.isMatched(Breakpoints.TabletPortrait);
  readonly isWeb = this.isMatched(Breakpoints.Web);
  readonly isWebLandscape = this.isMatched(Breakpoints.WebLandscape);
  readonly isWebPortrait = this.isMatched(Breakpoints.WebPortrait);
  readonly isXLarge = this.isMatched(Breakpoints.XLarge);
  readonly isXSmall = this.isMatched(Breakpoints.XSmall);

  readonly sidenavMode = computed<MatDrawerMode>(() => {
    if (this.isSmall() || this.isXSmall()) {
      return 'over';
    } else {
      return 'side';
    }
  });

  readonly sidenavOpen = computed<boolean>(() => {
    return !(this.isSmall() || this.isXSmall());
  });
}

const layoutPositionDirectives = [
  ToolbarDirective,
  ToolbarLeftDirective,
  ToolbarRightDirective,
  StatusbarDirective,
  StatusbarLeftDirective,
  StatusbarRightDirective,
  SidenavDirective,
  SidenavTopDirective,
  SidenavBottomDirective,
  ContentDirective,
  ContentTopDirective,
  ContentBottomDirective,
  FloatTopDirective,
  FloatTopRightDirective,
  FloatTopLeftDirective,
  FloatTopCenterDirective,
  FloatBottomDirective,
  FloatBottomRightDirective,
  FloatBottomLeftDirective,
  FloatCenterCenterDirective,
  FloatLeftCenterDirective,
  FloatRightCenterDirective,
  ViewPortDirective,
];

@NgModule({
  imports: [...layoutPositionDirectives],
  exports: [...layoutPositionDirectives],
})
export class LayoutPositionModule {}

@Component({
  selector: 'ae-ng-test[selector]',
  template: `
    @if (isDevelopmentMode) {
      <span title="This is shownn only in dev mode" style="color: green;">{{
        selector()
      }}</span>
    }
  `,
})
export class NgTestSelector {
  isDevelopmentMode = isDevMode();
  selector = input<string>('None');
}

export const layoutCommonModules = [
  MatSidenavModule,
  MatButtonModule,
  MatIconModule,
  MatTooltipModule,
  MatToolbarModule,
];

@NgModule({
  imports: [...layoutCommonModules],
  exports: [...layoutCommonModules],
})
export class LayoutCommonModule {}
