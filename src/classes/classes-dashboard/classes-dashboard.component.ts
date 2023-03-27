import {Component, OnInit} from '@angular/core';
import {Message} from "../../app/shared/models/Message";
import {MessageType} from "../../app/shared/models/MessageType";
import {MessageSnackbarComponent} from "../../app/message-snackbar/message-snackbar.component";


@Component({
  selector: 'app-classes-dashboard',
  templateUrl: './classes-dashboard.component.html',
  styleUrls: ['./classes-dashboard.component.css']
})
export class ClassesDashboardComponent implements OnInit{
  displayedColumns: string[] = ['id', 'subject', 'date', 'active'];
  dataSource: Classes[] = [];
  message: Message;
  durationInSeconds = 5;

  constructor(private ClassesService: ClassService, private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.ClassesService.getAllClasses().subscribe(value => {
        this.dataSource = value;

        if(value.length == 0) {
          this.message = new Message(MessageType.info, "No classes found!");
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

  deleteClasses(id: number) : void {
    this.ClassesService.deleteClassesById(id).subscribe(value => {this.ngOnInit()},
      error1 => {
        this.message = new Message(MessageType.error, "Technical Error!");
        this.openSnackBar();
      });
  }

  restoreClasses(id: number) : void {
    this.ClassesService.restoreClassesById(id).subscribe(value => {this.ngOnInit()},
      error1 => {
        this.message = new Message(MessageType.error, "Technical Error!");
        this.openSnackBar();
      });
  }
}
