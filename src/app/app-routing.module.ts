import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthenticationGuard } from './core/guards/authentication.guard';

const routes: Routes = [
  { path: "", redirectTo: "workplace", pathMatch: "full" },
  {
    path: "auth",
    loadChildren: () =>
      import("src/app/authentication/authentication.module").then(
        (m) => m.AuthenticationModule
      ),
  },
  {
    path: "workplace",
    canActivate: [AuthenticationGuard],
    loadChildren: () =>
      import("src/app/workplace/workplace.module").then(
        (m) => m.WorkplaceModule
      ),
  },
  { path: "**", redirectTo: "auth" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
