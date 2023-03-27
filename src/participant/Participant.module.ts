import {CreateParticipantComponent} from "./create-participant/create-participant.component";
import {ParticipantDashboardComponent} from "./participant-dashboard/participant-dashboard.component";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

@NgModule({
  declarations: [
    ParticipantDashboardComponent,
    CreateParticipantComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class ParticipantModule { }
