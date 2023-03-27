import { Component } from '@angular/core';
import {Notification} from "../../app/shared/models/Notification";
import {Message} from "../../app/shared/models/Message";
import {MessageType} from "../../app/shared/models/MessageType";
import {MessageSnackbarComponent} from "../../app/message-snackbar/message-snackbar.component";

@Component({
  selector: 'app-notification-dashboard',
  templateUrl: './notification-dashboard.component.html',
  styleUrls: ['./notification-dashboard.component.css']
})
export class NotificationDashboardComponent {
  displayedColumns: string[] = ['id', 'subjects', 'contents', 'hasReadNotification', 'active'];
  dataSource: Notification[] = [];
  message: Message;
  durationInSeconds = 5;

  constructor(private NotificationService: NotificationService, private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.NotificationService.getAllNotifications().subscribe(value => {
        this.dataSource = value;

        if(value.length == 0) {
          this.message = new Message(MessageType.info, "No Notification found!");
          this.openSnackBar();
        }
      },
      error => {
        this.message = new Message(MessageType.error, "Technical Error!");
        this.openSnackBar();
      });
  }

  openSnackBar() {
    this._snackBar.openFromComponent(MessageSnackbarComponent, {
      duration: this.durationInSeconds * 1000,
      data: this.message
    });
  }

  deleteNotification(id: number) : void {
    this.NotificationService.deleteNotificationById(id).subscribe(value => {this.ngOnInit()},
      error1 => {
        this.message = new Message(MessageType.error, "Technical Error!");
        this.openSnackBar();
      });
  }

  restoreNotification(id: number) : void {
    this.NotificationService.restoreNotificationById(id).subscribe(value => {this.ngOnInit()},
      error1 => {
        this.message = new Message(MessageType.error, "Technical Error!");
        this.openSnackBar();
      });
  }
}
