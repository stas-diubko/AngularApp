import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "auth", pathMatch: "full" },
  {
    path: "auth",
    loadChildren: () =>
      import("src/app/authentication/authentication.module").then(
        (m) => m.AuthenticationModule
      ),
  },
  {
    path: "workplace",
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
