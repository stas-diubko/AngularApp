import { Routes, RouterModule } from "@angular/router";
import { NoteComponent } from './note/note.component';
import { WorkplaceComponent } from "./workplace.component";


const routes: Routes = [
  {
    path: "",
    component: WorkplaceComponent,
    children: [
      {
        path: "notes",
        component: NoteComponent
      },
    ]
  }
];

export const WorkplaceRoutingModule = RouterModule.forChild(routes);
