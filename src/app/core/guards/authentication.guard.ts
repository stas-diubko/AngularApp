//Vendors
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationHelper } from 'src/app/shared/helpers/authentication-helper';

@Injectable()
export class AuthenticationGuard implements CanActivate {
    constructor(private router: Router, private authenticationHelper: AuthenticationHelper) { }

    async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const isAuthenticated: boolean = await this.authenticationHelper.isAuthenticated().then(res => { return res });

        if (isAuthenticated) {
            return true;
        }
        this.router.navigate(["auth"]);
        return false;
    }
}