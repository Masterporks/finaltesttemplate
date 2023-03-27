import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Participant} from "../../models/Participant";
import {Registration} from "../../models/Registration";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private REGISTRATION_BASE_URL = 'registration';

  constructor(private httpClient: HttpClient) { }

  public getAllRegistrations(): Observable<Registration[]> {
    return this.httpClient.get<Registration[]>(this.REGISTRATION_BASE_URL);
  }

  public getRegistrationById(id: number): Observable<Registration> {
    return this.httpClient.get<Registration>(this.REGISTRATION_BASE_URL + '/' + id);
  }

  public deleteRegistrationById(id: number): Observable<any> {
    return this.httpClient.get<any>(this.REGISTRATION_BASE_URL + '/delete/' + id);
  }

  public restoreRegistrationById(id: number): Observable<any> {
    return this.httpClient.get<any>(this.REGISTRATION_BASE_URL + '/restore/' + id);
  }
}
