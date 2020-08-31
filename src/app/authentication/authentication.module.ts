import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import {MatAutocompleteModule} from '@angular/material/autocomplete';
// import { MatInputModule, MatFormFieldModule, MatButtonModule, MatAutocompleteModule } from '@angular/material';
// import { MatInputModule, MatFormFieldModule, MatButtonModule, MatAutocompleteModule } from '@angular/material';

import { AuthenticationRoutingModule } from './authentication-routing.module';

import { AuthenticationComponent } from './authentication.component';
import { SignInComponent } from './sign-In/sign-In.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MaterialModule } from '../modules/material.modules';

const COMPONENTS = [
  SignInComponent,
  SignUpComponent,
  AuthenticationComponent
];

// const MATERIAL = [
//   MatInputModule,
//   MatFormFieldModule,
//   MatButtonModule,
//   MatAutocompleteModule
// ];

@NgModule({
  declarations: [
    COMPONENTS,
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    MaterialModule
    // MATERIAL
  ]
})
export class AuthenticationModule { }
