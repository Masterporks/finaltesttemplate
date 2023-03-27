import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Course} from "../../models/Course";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private NOTIFICATION_BASE_URL = 'notification';

  constructor(private httpClient: HttpClient) { }

  public getAllNotifications(): Observable<Notification[]> {
    return this.httpClient.get<Notification[]>(this.NOTIFICATION_BASE_URL);
  }

  public getNotificationById(id: number): Observable<Notification> {
    return this.httpClient.get<Notification>(this.NOTIFICATION_BASE_URL + '/' + id);
  }

  public deleteNotificationById(id: number): Observable<any> {
    return this.httpClient.get<any>(this.NOTIFICATION_BASE_URL + '/delete/' + id);
  }

  public restoreNotificationById(id: number): Observable<any> {
    return this.httpClient.get<any>(this.NOTIFICATION_BASE_URL + '/restore/' + id);
  }
}
