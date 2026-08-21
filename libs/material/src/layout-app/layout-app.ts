import { FlexModule } from '@aenode/material/flex';
import {
  Layout,
  LayoutCommonModule,
  LayoutPositionModule,
  NgTestSelector,
} from '@aenode/material/layout';
import { LogoComponent } from '@aenode/material/logo';
import { Component, isDevMode, NgModule } from '@angular/core';

@Component({
  selector: 'ae-layout[type=app]',
  imports: [
    LayoutCommonModule,
    LayoutPositionModule,
    FlexModule,
    LogoComponent,
    NgTestSelector,
  ],
  template: `
    <div #view="aeViewPort" aeViewPort aeFlexContainer>
      <!-- Main toolbar -->
      <mat-toolbar>
        <div vnFlexRow>
          <ng-content select="[vnLogo], ae-logo"
            ><ae-logo></ae-logo
          ></ng-content>
          <button matIconButton (click)="sidenav.toggle()">
            <mat-icon>{{ sidenav.opened ? 'menu_open' : 'menu' }}</mat-icon>
          </button>
        </div>

        <div vnFlex="row" vnFlexBetween>
          <div vnFlexRow>
            <ng-content select="[vnToolbarLeft]"></ng-content>
          </div>
          <div vnFlexRow>
            <ng-content aria-selected="vnToolbar"></ng-content>
          </div>
          <div vnFlexRow>
            <ng-content select="[vnToolbarRight]"></ng-content>
          </div>
        </div>
      </mat-toolbar>

      <!-- Sidenav container  -->
      <mat-sidenav-container vnFlexContainer>
        <!-- Sidenav -->
        <mat-sidenav
          #sidenav
          [mode]="view.sidenavMode()"
          [opened]="view.sidenavOpen()"
        >
          <div vnFlexContainer vnFlexBetween>
            <ng-content select="[vnSidenavTop]"> </ng-content>
            <ng-content select="[vnSidenav]"> </ng-content>
            <ng-content select="[vnSidenavBottom]"> </ng-content>
          </div>
        </mat-sidenav>

        <!-- Sidenav content -->
        <mat-sidenav-content>
          <div vnFlexContainer>
            <ng-content select="[vnContentTop]">
              <ae-ng-test selector="vnContentTop"></ae-ng-test>
            </ng-content>
            <ng-content select="[vnContent]">
              <ae-ng-test selector="vnContent"></ae-ng-test>
            </ng-content>
            <div vnFlexGrow></div>
            <ng-content select="[vnContentBottom]">
              <ae-ng-test selector="vnContentBottom"></ae-ng-test>
            </ng-content>
          </div>
        </mat-sidenav-content>
      </mat-sidenav-container>

      <!-- Status bar  -->
      <mat-toolbar>
        <div vnFlex="row" vnFlexBetween>
          <div vnFlexRow>
            <ng-content select="[vnStatusbarLeft]"></ng-content>
          </div>

          <div vnFlexRow>
            <ng-content aria-selected="vnStatusbar"></ng-content>
          </div>

          <div vnFlexRow>
            <ng-content select="[vnStatusbarRight]"></ng-content>
          </div>
        </div>
      </mat-toolbar>
      <!--  -->
    </div>
  `,
  host: {
    '[style.width]': '"100%"',
    '[style.height]': '"100%"',
  },
})
export class LayoutAppComponent extends Layout {
  ngContent(selector: string) {
    if (isDevMode()) {
      return selector;
    }
    return '';
  }
}

const layoutAppComponents = [LayoutAppComponent, LayoutPositionModule];
@NgModule({
  imports: [...layoutAppComponents],
  exports: [...layoutAppComponents],
})
export class LayoutAppModule {}
