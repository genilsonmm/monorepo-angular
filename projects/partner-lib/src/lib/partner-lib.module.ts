import { NgModule } from '@angular/core';
import { PartnerLibComponent } from './partner-lib.component';
import {MatCardModule} from "@angular/material/card";
import {AppRoutingModule} from "../../../project-base/src/app/app-routing.module";

@NgModule({
  declarations: [
    PartnerLibComponent
  ],
    imports: [
      MatCardModule,
      AppRoutingModule
    ],
  exports: [
    PartnerLibComponent
  ]
})
export class PartnerLibModule { }
