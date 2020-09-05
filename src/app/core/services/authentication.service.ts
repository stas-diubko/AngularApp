import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { RequestSignInAuthenticationView } from 'src/app/shared/models/authentication/request/request-signin-authentication.view';
import { RequestSignupAuthenticationView } from 'src/app/shared/models/authentication/request/request-signup-authentication.view copy';
import { ResponseSignInAuthenticationView } from 'src/app/shared/models/authentication/response/response-signin-authentication.view';
import { ResponseSignupAuthenticationView } from 'src/app/shared/models/authentication/response/response-signup-authentication.view copy';

@Injectable({
    providedIn: 'root'
})

export class AuthenticationService {
    private readonly apiUrl: string;

    constructor(private http: HttpClient) {
        this.apiUrl = environment.apiUrl;
    }

    signIn(data: RequestSignInAuthenticationView): Observable<ResponseSignInAuthenticationView> {
        return this.http.post<ResponseSignInAuthenticationView>(this.apiUrl + "users/login", data);
    };

    signUp(data: RequestSignupAuthenticationView): Observable<ResponseSignupAuthenticationView> {
        return this.http.post<ResponseSignupAuthenticationView>(this.apiUrl + "users", data);
    };
}