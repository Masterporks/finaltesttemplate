import {CommonModule} from "@angular/common";
import {CreateRegistrationComponent} from "./create-registration/create-registration.component";
import {RegistrationDashboardComponent} from "./registration-dashboard/registration-dashboard.component";
import {NgModule} from "@angular/core";

@NgModule({
  declarations: [
    RegistrationDashboardComponent,
    CreateRegistrationComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class RegistrationModule { }
