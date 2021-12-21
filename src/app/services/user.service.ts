import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {IDepartment} from "./interfaces/department.interface.";
import {Observable} from "rxjs";
import {IBuilding} from "./interfaces/building.interface";
import {IRoom} from "./interfaces/room.interface";
import {IEmployee} from "./interfaces/employee.interface";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  public getCurrentUser() {
    return this.http.get<IEmployee>(`${environment.apiUrl}:${environment.port}/current_user`);
  }

  public getEmployees() {
    return this.http.get<IEmployee[]>(`${environment.apiUrl}:${environment.port}/employee`);
  }

  public getDepartments(): Observable<IDepartment[]> {
    return this.http.get<IDepartment[]>(`${environment.apiUrl}:${environment.port}/department`);
  }

  public getBuildings(): Observable<IBuilding[]> {
    return this.http.get<IBuilding[]>(`${environment.apiUrl}:${environment.port}/building`)
  }

  public getRooms(): Observable<IRoom[]> {
    return this.http.get<IRoom[]>(`${environment.apiUrl}:${environment.port}/room`)
  }
}
