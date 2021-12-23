import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IEmployee} from "../interfaces/employee.interface";
import {Contacts} from "../interfaces/contacts.interface";
import IDepartment = Contacts.IDepartment;
import IBuilding = Contacts.IBuilding;
import IRoom = Contacts.IRoom;
import {PATH} from "../../global";

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  constructor(private http: HttpClient) { }

  public getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(`${PATH}/employee`);
  }

  public getDepartments(): Observable<IDepartment[]> {
    return this.http.get<IDepartment[]>(`${PATH}/department`);
  }

  public getBuildings(): Observable<IBuilding[]> {
    return this.http.get<IBuilding[]>(`${PATH}/building`)
  }

  public getRooms(): Observable<IRoom[]> {
    return this.http.get<IRoom[]>(`${PATH}/room`)
  }
}
