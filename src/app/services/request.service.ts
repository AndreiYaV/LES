import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Requests} from "./interfaces/requests.interface";
import IRequestType = Requests.IRequestType;

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  path = `${environment.apiUrl}:${environment.port}`;

  constructor(private http: HttpClient) { }

  public getRequestTypes(): Observable<IRequestType[]> {
    return this.http.get<IRequestType[]>(`${this.path}/request_type`);
  }
}
