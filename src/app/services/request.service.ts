import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Requests} from "../interfaces/requests.interface";
import IRequestType = Requests.IRequestType;
import {PATH} from "../../global";

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  constructor(private http: HttpClient) { }

  public getRequestTypes(): Observable<IRequestType[]> {
    return this.http.get<IRequestType[]>(`${PATH}/request_type`);
  }
}
