import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {IEmployee} from "./interfaces/employee.interface";
import {Contacts} from "./interfaces/contacts.interface";
import IDepartment = Contacts.IDepartment;
import IBuilding = Contacts.IBuilding;
import IRoom = Contacts.IRoom;

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  path = `${environment.apiUrl}:${environment.port}`;

  constructor(private http: HttpClient) { }

  public getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(`${this.path}/employee`);
  }

  public getDepartments(): Observable<IDepartment[]> {
    return this.http.get<IDepartment[]>(`${this.path}/department`);
  }

  public getBuildings(): Observable<IBuilding[]> {
    return this.http.get<IBuilding[]>(`${this.path}/building`)
  }

  public getRooms(): Observable<IRoom[]> {
    return this.http.get<IRoom[]>(`${this.path}/room`)
  }
}
