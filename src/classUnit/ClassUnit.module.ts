import {CreateClassUnitComponent} from "./create-class-unit/create-class-unit.component";
import {ClassUnitDashboardComponent} from "./classUnit-dashboard/class-unit-dashboard.component";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

@NgModule({
  declarations: [
    ClassUnitDashboardComponent,
    CreateClassUnitComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule

  ]
})
export class ClassUnitModule { }
