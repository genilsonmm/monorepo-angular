import { Component } from '@angular/core';

@Component({
  selector: 'lib-merchant',
  template: `
    <mat-card class="example-card">
      <mat-card-header>
        <mat-card-title>Merchant-lib works!</mat-card-title>
        <mat-card-subtitle>Merchant content only</mat-card-subtitle>
      </mat-card-header>
      <mat-card-content>
        <p>{{longText}}</p>
      </mat-card-content>
    </mat-card>
  `,
  styles: [
  ]
})
export class MerchantLibComponent {
  longText = `Some specific content here`;
}
