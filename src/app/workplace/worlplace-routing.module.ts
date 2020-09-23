import { Routes, RouterModule } from "@angular/router";
import { WorkplaceComponent } from "./workplace.component";


const routes: Routes = [
    {
        path: "",
        component: WorkplaceComponent
      },
];

export const WorkplaceRoutingModule = RouterModule.forChild(routes);
