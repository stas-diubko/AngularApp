import { Routes, RouterModule } from "@angular/router";

import { AuthenticationComponent } from "./authentication.component";
import { SignInComponent } from "./sign-In/sign-In.component";
import { SignUpComponent } from "./sign-up/sign-up.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "sign-in",
    pathMatch: "full",
  },
  {
    path: "sign-in",
    component: SignInComponent,
  },
  {
    path: "sign-up",
    component: SignUpComponent,
  },
  { path: "**", redirectTo: "" },
];

export const AuthenticationRoutingModule = RouterModule.forChild(routes);
