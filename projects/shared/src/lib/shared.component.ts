import { Component } from '@angular/core';

@Component({
  selector: 'lib-shared',
  template: `
    <button mat-icon-button (click)="gotoLogin()">
      <mat-icon>logout</mat-icon>
    </button>
    <span></span>
  `,
  styleUrls: []
})
export class SharedComponent {

  constructor() {
  }

  gotoLogin(){
    alert('logout')
  }
}
