import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './components/signup/sign-up/sign-up.component';
import { SetupAccountComponent } from './components/setupAccount/setup-account/setup-account.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SetupAdminComponent } from './components/setupAdmin/setup-admin/setup-admin/setup-admin.component';
import { CongratzPageComponent } from './components/congratz/congratz-page/congratz-page/congratz-page.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'sign-up', pathMatch: 'full' },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'setup-account', component: SetupAccountComponent },
  { path: 'setup-admin', component: SetupAdminComponent },
  { path: 'congratulation', component: CongratzPageComponent }
];

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule.forRoot(appRoutes, { useHash: true })],
  declarations: [],
  exports: [RouterModule]
})
export class AppRouting { }
