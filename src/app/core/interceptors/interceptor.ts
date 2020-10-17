//Vendors
import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from "@angular/common/http";
import {
  Observable,
  throwError
} from "rxjs";
import {
  catchError
} from "rxjs/operators";
import { ToastrService } from 'ngx-toastr';

import { AuthenticationHelper } from "src/app/shared/helpers/authentication-helper";

@Injectable()
export class Interceptor implements HttpInterceptor {
  constructor(
    private authenticationHelper: AuthenticationHelper,
    private toastrService: ToastrService
    ) {}

  intercept(request: HttpRequest<any>,  next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.authenticationHelper.getToken()) {
        request = this.addToken(request, this.authenticationHelper.getToken());
    };

    return next.handle(request).pipe(
        catchError(error => {
          if (error instanceof HttpErrorResponse && error.status === 401) {
            this.authenticationHelper.logout();
            return throwError(error);
          }
          if (error instanceof HttpErrorResponse && error.status === 403) {
            this.authenticationHelper.logout();
          }
          else {
            this.toastrService.error(error.error)
            this.authenticationHelper.logout();
            return throwError(error);
          };
        })
      );
  };

  private addToken(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  };
};
