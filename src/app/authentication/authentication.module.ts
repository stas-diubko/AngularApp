import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';

import { AuthenticationComponent } from './authentication.component';
import { SignInComponent } from './sign-In/sign-In.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MaterialModule } from '../modules/material.modules';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';

const COMPONENTS = [
  SignInComponent,
  SignUpComponent,
  AuthenticationComponent
];

@NgModule({
  declarations: [
    COMPONENTS,
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ]
})
export class AuthenticationModule { }
