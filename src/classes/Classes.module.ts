import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ClassesDashboardComponent} from "./classes-dashboard/classes-dashboard.component";
import {CreateClassesComponent} from "./create-classes/create-classes.component";


@NgModule({
  declarations: [
    ClassesDashboardComponent,
    CreateClassesComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class ClassesModule { }
