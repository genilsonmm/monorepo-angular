import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatCardModule} from "@angular/material/card";
import { MainComponent } from './views/main/main.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {SharedModule} from "../../../shared/src/lib/shared.module";
import {PartnerLibModule} from "../../../partner-lib/src/lib/partner-lib.module";
import {MerchantLibModule} from "../../../merchant-lib/src/lib/merchant-lib.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MainComponent,
  ],
  imports: [
    SharedModule,
    PartnerLibModule,
    MerchantLibModule,

    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCardModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
