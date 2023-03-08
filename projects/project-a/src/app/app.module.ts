import { NgModule } from '@angular/core';
import { HomeComponent } from './views/home/home.component';
import {RouterModule, Routes} from "@angular/router";
import {CommonModule} from "@angular/common";

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: HomeComponent,
}];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [RouterModule.forChild(routes), CommonModule],
})
export class AppModule { }
