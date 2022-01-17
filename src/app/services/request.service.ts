import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import IRequestType = Requests.IRequestType;
import {PATH} from "../../global";
import {Requests} from "../interfaces/requests.interface";
import {IEmployee} from "../interfaces/employee.interface";

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  constructor(private http: HttpClient) { }

  public getRequestTypes(): Observable<IRequestType[]> {
    return this.http.get<IRequestType[]>(`${PATH}/request_type`);
  }

  public getRequests():Observable<IEmployee> {
    return this.http.get<IEmployee>(`${PATH}/current_user`)
  }

  public createRequest(req: IEmployee): Observable<IEmployee> {
    return this.http.patch<IEmployee>(`${PATH}/current_user?requests=:requests`, req);
  }

  public deleteRequest(id: string): Observable<any> {
    return this.http.delete(`${PATH}/current_user.requests/${id}`)
  }
}
