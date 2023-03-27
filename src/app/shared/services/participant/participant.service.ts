import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Participant} from "../../models/Participant";

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  private PARTICIPANT_BASE_URL = 'participant';

  constructor(private httpClient: HttpClient) { }

  public getAllParticipants(): Observable<Participant[]> {
    return this.httpClient.get<Participant[]>(this.PARTICIPANT_BASE_URL);
  }

  public getParticipantById(id: number): Observable<Participant> {
    return this.httpClient.get<Participant>(this.PARTICIPANT_BASE_URL + '/' + id);
  }

  public deleteParticipantById(id: number): Observable<any> {
    return this.httpClient.get<any>(this.PARTICIPANT_BASE_URL + '/delete/' + id);
  }

  public restoreParticipantById(id: number): Observable<any> {
    return this.httpClient.get<any>(this.PARTICIPANT_BASE_URL + '/restore/' + id);
  }
}
