import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PatternsConstants } from 'src/app/shared/constants/patterns.constants';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { ResponseSignInAuthenticationView } from 'src/app/shared/models/authentication/response/response-signin-authentication.view';
import { RequestSignInAuthenticationView } from 'src/app/shared/models/authentication/request/request-signin-authentication.view';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['../authentication.component.scss']
})
export class SignInComponent {
  loginForm: FormGroup;
  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
  ) {
    this.buildForm();
  }

  private buildForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(PatternsConstants.PATTERN_EMAIL)]],
      password: ['', [Validators.required, Validators.pattern(PatternsConstants.PATTERN_PASSWORD)]]
    });
  }

  signIn(): void {
    if (!this.formValidation()) return;
    const loginData: RequestSignInAuthenticationView = {
      email: this.loginForm.controls.email.value,
      password: this.loginForm.controls.password.value
    };
    this.authenticationService.signIn(loginData).subscribe((response: ResponseSignInAuthenticationView) => {
      console.log(response);
    });
  }

  private formValidation(): boolean {
    this.submitted = true;
    return this.loginForm.valid;
  }
}
