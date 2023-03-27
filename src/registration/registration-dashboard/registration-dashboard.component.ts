import { Component } from '@angular/core';
import {Participant} from "../../app/shared/models/Participant";
import {Message} from "../../app/shared/models/Message";
import {MessageType} from "../../app/shared/models/MessageType";
import {MessageSnackbarComponent} from "../../app/message-snackbar/message-snackbar.component";

@Component({
  selector: 'app-registration-dashboard',
  templateUrl: './registration-dashboard.component.html',
  styleUrls: ['./registration-dashboard.component.css']
})
export class RegistrationDashboardComponent {

  displayedColumns: string[] = ['id', 'participantType', 'participant', 'date' ,'course', 'active'];
  dataSource: Registration[] = [];
  message: Message;
  durationInSeconds = 5;

  constructor(private RegistrationService: RegistrationService, private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.RegistrationService.getAllRegistrations().subscribe(value => {
        this.dataSource = value;

        if(value.length == 0) {
          this.message = new Message(MessageType.info, "No Registration found!");
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

  deleteRegistration(id: number) : void {
    this.RegistrationService.deleteRegistrationById(id).subscribe(value => {this.ngOnInit()},
      error1 => {
        this.message = new Message(MessageType.error, "Technical Error!");
        this.openSnackBar();
      });
  }

  restoreParticipant(id: number) : void {
    this.RegistrationService.restoreRegistrationById(id).subscribe(value => {this.ngOnInit()},
      error1 => {
        this.message = new Message(MessageType.error, "Technical Error!");
        this.openSnackBar();
      });
  }
}
