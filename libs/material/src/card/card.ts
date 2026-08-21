import { FlexModule } from '@aenode/material/flex';
import { Component, Directive, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Directive({
  selector: 'button[aeCardAction],[aeCardAction]',
})
export class CardActionDirective {}

@Component({
  selector: 'ae-card',
  imports: [FlexModule, MatCardModule, MatButtonModule, MatIconModule],
  template: `
    <mat-card>
      <mat-card-header>
        @if (avatarSrc()) {
          <img matCardAvatar [src]="avatarSrc()" [alt]="avatarAlt()" />
        }
        @if (title()) {
          <mat-card-title>{{ title() }}</mat-card-title>
        }
        @if (subTitle()) {
          <mat-card-subtitle>{{ subTitle() }}</mat-card-subtitle>
        }
      </mat-card-header>

      @if (imgSrc()) {
        <img matCardImage [src]="imgSrc()" [alt]="imgAlt()" />
      }

      @if (content()) {
        <mat-card-content>
          @for (c of content(); track c) {
            <p>{{ c }}</p>
          }
        </mat-card-content>
      }
      <mat-card-actions>
        <div vnFlexRow vnFlexFull vnFlexWrap vnFlexCenter vnFlexGap>
          <ng-content select="button[vnCardAction]"></ng-content>
        </div>
      </mat-card-actions>
    </mat-card>
  `,
})
export class CardComponent {
  title = input<string>();
  subTitle = input<string>();
  content = input<string[]>([]);

  avatarSrc = input<string>();
  avatarAlt = input<string>();

  imgSrc = input<string>();
  imgAlt = input<string>();
}
