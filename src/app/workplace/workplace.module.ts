import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WorkplaceComponent } from "./workplace.component";
import { WorkplaceRoutingModule } from './worlplace-routing.module';

const COMPONENTS = [
    WorkplaceComponent
];

@NgModule({
    declarations: [
      COMPONENTS,
    ],
    imports: [
      CommonModule,
      WorkplaceRoutingModule
    ]
  })
  export class WorkplaceModule { }