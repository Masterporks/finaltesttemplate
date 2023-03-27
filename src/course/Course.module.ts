import {CommonModule} from "@angular/common";
import {CreateCourseComponent} from "./create-course/create-course.component";
import {CourseDashboardComponent} from "./course-dashboard/course-dashboard.component";
import {NgModule} from "@angular/core";

@NgModule({
  declarations: [
    CourseDashboardComponent,
    CreateCourseComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class CourseModule { }
