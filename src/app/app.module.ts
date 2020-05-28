import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ValidationMessagesComponent } from './components/validation/validation-messages.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { AppRouting } from './app.routing.module';
// import { RegisterComponent } from './Components/Users/sign-up/register.component';
import { SignUpComponent } from './components/signup/sign-up/sign-up.component';
import { SetupAccountComponent } from './components/setupAccount/setup-account/setup-account.component';
import { SetupAdminComponent } from './components/setupAdmin/setup-admin/setup-admin/setup-admin.component';
import { CongratzPageComponent } from './components/congratz/congratz-page/congratz-page/congratz-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SetupAccountComponent,
    SetupAdminComponent,
    CongratzPageComponent,
    ValidationMessagesComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRouting,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ValidationMessagesComponent
  ]
})
export class AppModule { }
