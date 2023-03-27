import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Classes} from "../../models/Classes";
import {Course} from "../../models/Course";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private COURSE_BASE_URL = 'course';

  constructor(private httpClient: HttpClient) { }

  public getAllCourses(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.COURSE_BASE_URL);
  }

  public getCourseById(id: number): Observable<Course> {
    return this.httpClient.get<Course>(this.COURSE_BASE_URL + '/' + id);
  }

  public deleteCourseById(id: number): Observable<any> {
    return this.httpClient.get<any>(this.COURSE_BASE_URL + '/delete/' + id);
  }

  public restoreCourseById(id: number): Observable<any> {
    return this.httpClient.get<any>(this.COURSE_BASE_URL + '/restore/' + id);
  }
}
