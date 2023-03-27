import {CreateClassUnitComponent} from "./create-class-unit/create-class-unit.component";
import {ClassUnitDashboardComponent} from "./classUnit-dashboard/class-unit-dashboard.component";
import {CommonModule} from "@angular/common";

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
