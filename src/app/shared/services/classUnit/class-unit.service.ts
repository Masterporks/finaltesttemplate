import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ClassUnit} from "../../models/ClassUnit";

@Injectable({
  providedIn: 'root'
})
export class ClassUnitService {

  private CLASS_UNIT_BASE_URL = 'class_unit';

  constructor(private httpClient: HttpClient) { }

  public getAllClassUnits(): Observable<ClassUnit[]> {
    return this.httpClient.get<ClassUnit[]>(this.CLASS_UNIT_BASE_URL);
  }

  public getClassUnitById(id: number): Observable<ClassUnit> {
    return this.httpClient.get<ClassUnit>(this.CLASS_UNIT_BASE_URL + '/' + id);
  }

  public deleteClassUnitById(id: number): Observable<any> {
    return this.httpClient.get<any>(this.CLASS_UNIT_BASE_URL + '/delete/' + id);
  }

  public restoreClassUnitById(id: number): Observable<any> {
    return this.httpClient.get<any>(this.CLASS_UNIT_BASE_URL + '/restore/' + id);
  }
}
