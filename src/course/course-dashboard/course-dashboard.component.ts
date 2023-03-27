import {Component, OnInit} from '@angular/core';
import {Message} from "../../app/shared/models/Message";
import {MessageType} from "../../app/shared/models/MessageType";
import {MessageSnackbarComponent} from "../../app/message-snackbar/message-snackbar.component";
import {Course} from "../../app/shared/models/Course";


@Component({
  selector: 'app-course-dashboard',
  templateUrl: './course-dashboard.component.html',
  styleUrls: ['./course-dashboard.component.css']
})
export class CourseDashboardComponent implements OnInit{
  displayedColumns: string[] = ['id', 'name', 'active'];
  dataSource: Course[] = [];
  message: Message;
  durationInSeconds = 5;

  constructor(private CourseService: CourseService, private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.CourseService.getAllCourses().subscribe(value => {
        this.dataSource = value;

        if(value.length == 0) {
          this.message = new Message(MessageType.info, "No Course found!");
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

  deleteCourse(id: number) : void {
    this.CourseService.deleteCourseById(id).subscribe(value => {this.ngOnInit()},
      error1 => {
        this.message = new Message(MessageType.error, "Technical Error!");
        this.openSnackBar();
      });
  }

  restoreCourseUnit(id: number) : void {
    this.CourseService.restoreCourseById(id).subscribe(value => {this.ngOnInit()},
      error1 => {
        this.message = new Message(MessageType.error, "Technical Error!");
        this.openSnackBar();
      });
  }
}
