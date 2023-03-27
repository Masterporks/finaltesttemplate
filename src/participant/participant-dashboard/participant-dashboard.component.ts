import { Component } from '@angular/core';
import {Notification} from "../../app/shared/models/Notification";
import {Message} from "../../app/shared/models/Message";
import {MessageType} from "../../app/shared/models/MessageType";
import {MessageSnackbarComponent} from "../../app/message-snackbar/message-snackbar.component";
import {Participant} from "../../app/shared/models/Participant";

@Component({
  selector: 'app-participant-dashboard',
  templateUrl: './participant-dashboard.component.html',
  styleUrls: ['./participant-dashboard.component.css']
})
export class ParticipantDashboardComponent {

  displayedColumns: string[] = ['id', 'participantType', 'firstName', 'lastName', 'email', 'active'];
  dataSource: Participant[] = [];
  message: Message;
  durationInSeconds = 5;

  constructor(private ParticipantService: ParticipantService, private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.ParticipantService.getAllParticipants().subscribe(value => {
        this.dataSource = value;

        if(value.length == 0) {
          this.message = new Message(MessageType.info, "No Participant found!");
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

  deleteParticipant(id: number) : void {
    this.ParticipantService.deleteParticipantById(id).subscribe(value => {this.ngOnInit()},
      error1 => {
        this.message = new Message(MessageType.error, "Technical Error!");
        this.openSnackBar();
      });
  }

  restoreParticipant(id: number) : void {
    this.ParticipantService.restoreParticipantById(id).subscribe(value => {this.ngOnInit()},
      error1 => {
        this.message = new Message(MessageType.error, "Technical Error!");
        this.openSnackBar();
      });
  }
}
