import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Classes} from "../../models/Classes";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClassesService {

  private CLASSES_BASE_URL = 'classes';

  constructor(private httpClient: HttpClient) { }

  public getAllClasses(): Observable<Classes[]> {
    return this.httpClient.get<Classes[]>(this.CLASSES_BASE_URL);
  }

  public getClassesById(id: number): Observable<Classes> {
    return this.httpClient.get<Classes>(this.CLASSES_BASE_URL + '/' + id);
  }

  public deleteClassesById(id: number): Observable<any> {
    return this.httpClient.get<any>(this.CLASSES_BASE_URL + '/delete/' + id);
  }

  public restoreClassesById(id: number): Observable<any> {
    return this.httpClient.get<any>(this.CLASSES_BASE_URL + '/restore/' + id);
  }
}
