import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WorkplaceComponent } from "./workplace.component";
import { WorkplaceRoutingModule } from './worlplace-routing.module';
import { MaterialModule } from '../modules/material.modules';
import { NoteComponent } from './note/note.component';

const COMPONENTS = [
    WorkplaceComponent
];

@NgModule({
    declarations: [
      COMPONENTS,
      NoteComponent,
    ],
    imports: [
      CommonModule,
      WorkplaceRoutingModule,
      MaterialModule
    ]
  })
  export class WorkplaceModule { }