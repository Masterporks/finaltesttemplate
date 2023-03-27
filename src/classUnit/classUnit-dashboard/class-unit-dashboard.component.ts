import {Component, OnInit} from '@angular/core';
import {Message} from "../../app/shared/models/Message";
import {MessageType} from "../../app/shared/models/MessageType";
import {MessageSnackbarComponent} from "../../app/message-snackbar/message-snackbar.component";



@Component({
  selector: 'app-classUnit-dashboard',
  templateUrl: './classUnit-dashboard.component.html',
  styleUrls: ['./classUnit-dashboard.component.css']
})
export class ClassUnitDashboardComponent implements OnInit{
  displayedColumns: string[] = ['id', 'name', 'active'];
  dataSource: ClassUnit[] = [];
  message: Message;
  durationInSeconds = 5;

  constructor(private ClassUnitService: ClassUnitService, private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.ClassUnitService.getAllClassUnits().subscribe(value => {
        this.dataSource = value;

        if(value.length == 0) {
          this.message = new Message(MessageType.info, "No Class Unit found!");
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

  deleteClassUnit(id: number) : void {
    this.ClassUnitService.deleteClassUnitById(id).subscribe(value => {this.ngOnInit()},
      error1 => {
        this.message = new Message(MessageType.error, "Technical Error!");
        this.openSnackBar();
      });
  }

  restoreClassUnit(id: number) : void {
    this.ClassUnitService.restoreClassUnitById(id).subscribe(value => {this.ngOnInit()},
      error1 => {
        this.message = new Message(MessageType.error, "Technical Error!");
        this.openSnackBar();
      });
  }
}
