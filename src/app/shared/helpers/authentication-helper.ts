import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthenticationHelper {
  private tokenData: string;
  constructor(
      private router: Router
    ) {
    this.tokenData = localStorage.getItem("token");
  };

  login(token: string): void {
    localStorage.setItem("token", token);
    this.router.navigate(["workplace"]);
  };

  logout(): void {
    localStorage.removeItem("token");
    this.router.navigate(["auth"]);
  };

  isAuthenticated(): Promise<boolean> {
    return new Promise((resolve) => {
      if (!this.tokenData) {
        let data = localStorage.getItem("token");
        resolve(!!data);
      } else {
        resolve(!!this.tokenData);
      };
    });
  };

  async isAuthenticatedRedirect(): Promise<void> {
    const isAuthenticate = await this.isAuthenticated();
    if (isAuthenticate) this.router.navigate(["workplace"]);
  };

  getToken(): string {
    const token = localStorage.getItem("token");
    return token;
  }
};
