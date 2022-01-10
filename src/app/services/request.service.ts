import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import IRequestType = Requests.IRequestType;
import IRequest = Requests.IRequest;
import {PATH} from "../../global";
import {Requests} from "../interfaces/requests.interface";

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  constructor(private http: HttpClient) { }

  public getRequestTypes(): Observable<IRequestType[]> {
    return this.http.get<IRequestType[]>(`${PATH}/request_type`);
  }

  public createRequest(req: IRequest): Observable<IRequest> {
    return this.http.post<IRequest>(`${PATH}/current_user/requests`, req);
  }
}
