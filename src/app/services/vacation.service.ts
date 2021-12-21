import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {IRequestType} from "./interfaces/request-type.interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VacationService {

  constructor(private http: HttpClient) { }

  public getRequestTypes(): Observable<IRequestType[]> {
    return this.http.get<IRequestType[]>(`${environment.apiUrl}:${environment.port}/request_type`);
  }
}
