import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PatternsConstants } from 'src/app/shared/constants/patterns.constants';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { ResponseSignupAuthenticationView } from 'src/app/shared/models/authentication/response/response-signup-authentication.view copy';
import { RequestSignupAuthenticationView } from 'src/app/shared/models/authentication/request/request-signup-authentication.view copy';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['../authentication.component.scss']
})
export class SignUpComponent {
  registrationForm: FormGroup;
  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
  ) { 
    this.buildForm();
  }

  private buildForm(): void {
    this.registrationForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern(PatternsConstants.PATTERN_NAME)]],
      surname: ['', [Validators.required, Validators.pattern(PatternsConstants.PATTERN_SURNAME)]],
      email: ['', [Validators.required, Validators.pattern(PatternsConstants.PATTERN_EMAIL)]],
      password: ['', [Validators.required, Validators.pattern(PatternsConstants.PATTERN_PASSWORD)]]
    });
  }

  signUp(): void {
    if (!this.formValidation()) return;
    const registarationData: RequestSignupAuthenticationView = {
      name: this.registrationForm.controls.name.value,
      surname: this.registrationForm.controls.surname.value,
      email: this.registrationForm.controls.email.value,
      password: this.registrationForm.controls.password.value
    };
    this.authenticationService.signUp(registarationData).subscribe((response: ResponseSignupAuthenticationView) => {
      console.log(response);
    });
  }

  private formValidation(): boolean {
    this.submitted = true;
    return this.registrationForm.valid;
  }
}
