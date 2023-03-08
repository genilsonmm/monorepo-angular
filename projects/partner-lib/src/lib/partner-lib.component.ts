import { Component } from '@angular/core';

@Component({
  selector: 'lib-partner',
  template: `
    <mat-card class="example-card">
      <mat-card-header>
        <mat-card-title>Partner-lib works!</mat-card-title>
        <mat-card-subtitle>Partner content only</mat-card-subtitle>
      </mat-card-header>
      <mat-card-content>
        <p>{{longText}}</p>
        <a [title]="'Partner flow'" [routerLink]="['../../project-a']">Partner flow</a>
      </mat-card-content>
    </mat-card>

  `,
  styles: [
  ]
})
export class PartnerLibComponent {
  longText = `Some specific content here`;
}
