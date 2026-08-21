import {
  LayoutAppComponent,
  LayoutAppModule,
} from '@aenode/material/layout-app';
import { NavListItem } from '@aenode/material/list';
import { ListNavComponent } from '@aenode/material/list-nav';
import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  imports: [
    LayoutAppComponent,
    LayoutAppModule,
    ListNavComponent,
    MatButtonModule,
    MatIconModule,
  ],
  template: `
    <ae-layout type="app">
      <!-- Sidenavs -->
      <ng-container aeSidenavTop>
        <ae-list title="Top List" type="nav" [items]="items()"></ae-list>
      </ng-container>

      <ng-container aeSidenav>
        <ae-list title="Sidenav Center" type="nav" [items]="items()"></ae-list>
      </ng-container>

      <ng-container aeSidenavBottom>
        <ae-list title="Bottom List" type="nav" [items]="items()"></ae-list>
      </ng-container>

      <!-- Toolbar  -->
      <ng-container aeToolbarLeft>
        <button matIconButton><mat-icon>home</mat-icon></button>
        <button matIconButton><mat-icon>info</mat-icon></button>
        <button matIconButton><mat-icon>apps</mat-icon></button>
      </ng-container>
      <ng-container aeToolbar>
        <button matIconButton><mat-icon>home</mat-icon></button>
        <button matIconButton><mat-icon>info</mat-icon></button>
        <button matIconButton><mat-icon>apps</mat-icon></button>
      </ng-container>
      <ng-container aeToolbarRight>
        <button matIconButton><mat-icon>home</mat-icon></button>
        <button matIconButton><mat-icon>info</mat-icon></button>
        <button matIconButton><mat-icon>apps</mat-icon></button>
      </ng-container>

      <!-- Status bar -->
      <ng-container aeStatusbarLeft>
        <button matIconButton><mat-icon>home</mat-icon></button>
        <button matIconButton><mat-icon>info</mat-icon></button>
        <button matIconButton><mat-icon>apps</mat-icon></button>
      </ng-container>
      <ng-container aeStatusbar>
        <button matIconButton><mat-icon>home</mat-icon></button>
        <button matIconButton><mat-icon>info</mat-icon></button>
        <button matIconButton><mat-icon>apps</mat-icon></button>
      </ng-container>
      <ng-container aeStatusbarRight>
        <button matIconButton><mat-icon>home</mat-icon></button>
        <button matIconButton><mat-icon>info</mat-icon></button>
        <button matIconButton><mat-icon>apps</mat-icon></button>
      </ng-container>

      <ng-container aeContentTop>
        <div>Top content</div>
      </ng-container>
      <ng-container aeContent>
        <div>Content</div>
      </ng-container>
      <ng-container aeContentBottom>
        <div>Bottom content</div>
      </ng-container>
    </ae-layout>
  `,
})
export class SampleLayoutComponent {
  items = input<NavListItem[]>([
    { title: 'home', route: ['home'], icon: 'home' },
    { title: 'about', route: ['about'], icon: 'info' },
    { title: 'services', route: ['services'], icon: 'apps' },
  ]);
}
