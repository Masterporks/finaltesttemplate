import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {MatExpansionPanelComponent} from "./mat-expansion-panel/mat-expansion-panel.component";
import {BrowserModule} from "@angular/platform-browser";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {ClassesModule} from "../classes/Classes.module";
import {ClassUnitModule} from "../classUnit/ClassUnit.module";
import {CourseModule} from "../course/Course.module";
import {NotificationModule} from "../notification/Notification.module";
import {ParticipantModule} from "../participant/Participant.module";
import {RegistrationModule} from "../registration/Registration.module";

@NgModule({
  declarations: [
    AppComponent,
    MatExpansionPanelComponent
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    ClassesModule,
    ClassUnitModule,
    CourseModule,
    NotificationModule,
    ParticipantModule,
    RegistrationModule,
    HttpClientModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
