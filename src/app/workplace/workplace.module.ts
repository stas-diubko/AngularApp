import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WorkplaceComponent } from "./workplace.component";
import { WorkplaceRoutingModule } from './worlplace-routing.module';
import { MaterialModule } from '../modules/material.modules';
import { NoteComponent } from './note/note.component';
import { AddNoteDialog } from './note/note.component';

const COMPONENTS = [
    WorkplaceComponent
];

@NgModule({
    declarations: [
      COMPONENTS,
      NoteComponent,
      AddNoteDialog
    ],
    imports: [
      CommonModule,
      WorkplaceRoutingModule,
      MaterialModule
    ],
    entryComponents: [ AddNoteDialog ]

  })
  export class WorkplaceModule { }