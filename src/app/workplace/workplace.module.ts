import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WorkplaceComponent } from "./workplace.component";
import { WorkplaceRoutingModule } from './worlplace-routing.module';
import { MaterialModule } from '../modules/material.modules';

const COMPONENTS = [
    WorkplaceComponent
];

@NgModule({
    declarations: [
      COMPONENTS,
    ],
    imports: [
      CommonModule,
      WorkplaceRoutingModule,
      MaterialModule
    ]
  })
  export class WorkplaceModule { }