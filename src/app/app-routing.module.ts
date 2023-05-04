import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: "/home",
    component: AppComponent,
    pathMatch: "full"
  },
  {
    path: "**",
    redirectTo: "home"
  },
  {
    path: "/crud/add",
    component: AppComponent,
    redirectTo: "home"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
