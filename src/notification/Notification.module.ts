import {CreateNotificationComponent} from "./create-notification/create-notification.component";
import {NotificationDashboardComponent} from "./notification-dashboard/notification-dashboard.component";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

@NgModule({
  declarations: [
    NotificationDashboardComponent,
    CreateNotificationComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class NotificationModule { }
