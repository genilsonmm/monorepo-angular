import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./views/home/home.component";
import {LoginComponent} from "./views/login/login.component";
import {MainComponent} from "./views/main/main.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: '', component: MainComponent,
    children:[
      { path: 'home/:profile', component: HomeComponent }
    ]
  },
  {
    path:'project-a', loadChildren: () => import('../../../project-a/src/app/app.module').then((esModule)=> esModule.AppModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
