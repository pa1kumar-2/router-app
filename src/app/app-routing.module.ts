import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { errorGuard } from './guard/error.guard';
import { successGuard } from './guard/success.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'success', loadChildren: () => import('./success/success.module').then(m => m.SuccessModule), canActivate: [successGuard] },
  { path: 'error', loadChildren: () => import('./error/error.module').then(m => m.ErrorModule), canActivate: [errorGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
