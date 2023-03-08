import { NgModule } from '@angular/core';
import { MerchantLibComponent } from './merchant-lib.component';
import {MatCardModule} from "@angular/material/card";



@NgModule({
  declarations: [
    MerchantLibComponent
  ],
    imports: [
        MatCardModule
    ],
  exports: [
    MerchantLibComponent
  ]
})
export class MerchantLibModule { }
