import { NgModule } from '@angular/core';
import { SharedComponent } from './shared.component';
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [
    SharedComponent
  ],
    imports: [
        MatIconModule
    ],
  exports: [
    SharedComponent
  ]
})
export class SharedModule { }
