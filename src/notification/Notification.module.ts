import {CreateNotificationComponent} from "./create-notification/create-notification.component";
import {NotificationDashboardComponent} from "./notification-dashboard/notification-dashboard.component";
import {CommonModule} from "@angular/common";

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
